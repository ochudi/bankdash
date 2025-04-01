"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowDown, ArrowUp } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const transactions = Array.from({ length: 20 }, (_, i) => ({
  description: `Transaction ${i + 1}`,
  id: `#12548${796 + i}`,
  type: i % 2 === 0 ? "Shopping" : "Transfer",
  card: "1234 ****",
  date: "28 Jan, 12.30 AM",
  amount: i % 2 === 0 ? `-$${(i + 1) * 50}` : `+$${(i + 1) * 75}`,
}));

const TRANSACTIONS_PER_PAGE = 5;

const RecentTransactionsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tab, setTab] = useState("all");

  const filteredTransactions = transactions.filter((tx) => {
    if (tab === "income") return tx.amount.startsWith("+");
    if (tab === "expense") return tx.amount.startsWith("-");
    return true;
  });

  const totalPages = Math.ceil(filteredTransactions.length / TRANSACTIONS_PER_PAGE);
  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * TRANSACTIONS_PER_PAGE,
    currentPage * TRANSACTIONS_PER_PAGE
  );

  return (
    <div className="flex flex-col gap-5 w-full">
      <h2 className="text-xl font-semibold">Recent Transactions</h2>
      <Card className="rounded-2xl pt-5">
        <CardContent>
          <Tabs defaultValue="all" onValueChange={setTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="all">All Transactions</TabsTrigger>
              <TabsTrigger value="income">Income</TabsTrigger>
              <TabsTrigger value="expense">Expense</TabsTrigger>
            </TabsList>

            <TabsContent value={tab}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead></TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Card</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Receipt</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedTransactions.map((tx, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className={`p-2 w-fit rounded-full border-2 ${tx.amount.startsWith("+") ? "border-green-500" : "border-red-500"}`}>
                          {tx.amount.startsWith("+") ? <ArrowDown className="h-5 w-5 text-green-500" /> : <ArrowUp className="h-5 w-5 text-red-500" />}
                        </div>
                      </TableCell>
                      <TableCell>{tx.description}</TableCell>
                      <TableCell>{tx.id}</TableCell>
                      <TableCell>{tx.type}</TableCell>
                      <TableCell>{tx.card}</TableCell>
                      <TableCell>{tx.date}</TableCell>
                      <TableCell className={tx.amount.startsWith("+") ? "text-green-600" : "text-red-600"}>{tx.amount}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm" className="rounded-full border-blue-600 text-blue-600 hover:text-blue-700 hover:border-blue-700">
                          Download
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {paginatedTransactions.length === 0 && (
                <div className="text-center py-10 text-muted-foreground">No transactions available</div>
              )}

              <div className="mt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, index) => (
                      <PaginationItem key={index}>
                        <PaginationLink href="#" isActive={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem>
                      <PaginationNext href="#" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentTransactionsTable;
