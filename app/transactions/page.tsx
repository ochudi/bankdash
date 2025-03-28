import { Header } from "@/components/header"
import { CardDisplay } from "@/components/card-display"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowDown, ArrowUp, Download } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export default function TransactionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 space-y-8 p-6">
        <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">My Cards</h2>

            <div className="flex gap-4 overflow-x-auto pb-2">
              <CardDisplay
                balance="$5,756"
                cardHolder="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
                validThru="12/22"
                variant="blue"
                className="min-w-[320px]"
              />

              <CardDisplay
                balance="$5,756"
                cardHolder="Eddy Cusuma"
                cardNumber="3778 **** **** 1234"
                validThru="12/22"
                variant="white"
                className="min-w-[320px]"
              />
            </div>
          </div>

          <Card className="w-full md:w-auto">
            <CardHeader className="pb-2">
              <CardTitle>My Expense</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[150px] w-full">
                {/* Simplified bar chart */}
                <div className="flex items-end justify-between h-full gap-2">
                  {["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"].map((month, i) => (
                    <div key={month} className="flex flex-col items-center gap-2 w-full">
                      <div
                        className="w-8 bg-teal-400 rounded-t-md"
                        style={{ height: `${Math.max(20, Math.random() * 100)}px` }}
                      ></div>
                      <span className="text-xs text-muted-foreground">{month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all-transactions">
              <TabsList className="mb-6">
                <TabsTrigger value="all-transactions">All Transactions</TabsTrigger>
                <TabsTrigger value="income">Income</TabsTrigger>
                <TabsTrigger value="expense">Expense</TabsTrigger>
              </TabsList>

              <TabsContent value="all-transactions">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead></TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Card</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Receipt</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        icon: <ArrowUp className="h-4 w-4" />,
                        description: "Spotify Subscription",
                        id: "#12548796",
                        type: "Shopping",
                        card: "1234 ****",
                        date: "28 Jan, 12.30 AM",
                        amount: "-$2,500",
                        direction: "up",
                      },
                      {
                        icon: <ArrowDown className="h-4 w-4" />,
                        description: "Freepik Sales",
                        id: "#12548796",
                        type: "Transfer",
                        card: "1234 ****",
                        date: "25 Jan, 10.40 PM",
                        amount: "+$750",
                        direction: "down",
                      },
                      {
                        icon: <ArrowUp className="h-4 w-4" />,
                        description: "Mobile Service",
                        id: "#12548796",
                        type: "Service",
                        card: "1234 ****",
                        date: "20 Jan, 10.40 PM",
                        amount: "-$150",
                        direction: "up",
                      },
                      {
                        icon: <ArrowUp className="h-4 w-4" />,
                        description: "Wilson",
                        id: "#12548796",
                        type: "Transfer",
                        card: "1234 ****",
                        date: "15 Jan, 03.29 PM",
                        amount: "-$1050",
                        direction: "up",
                      },
                      {
                        icon: <ArrowDown className="h-4 w-4" />,
                        description: "Emilly",
                        id: "#12548796",
                        type: "Transfer",
                        card: "1234 ****",
                        date: "14 Jan, 10.40 PM",
                        amount: "+$840",
                        direction: "down",
                      },
                    ].map((tx, i) => (
                      <TableRow key={i}>
                        <TableCell>
                          <div className={`p-2 rounded-full ${tx.direction === "up" ? "bg-red-100" : "bg-green-100"}`}>
                            {tx.icon}
                          </div>
                        </TableCell>
                        <TableCell>{tx.description}</TableCell>
                        <TableCell>{tx.id}</TableCell>
                        <TableCell>{tx.type}</TableCell>
                        <TableCell>{tx.card}</TableCell>
                        <TableCell>{tx.date}</TableCell>
                        <TableCell className={tx.amount.startsWith("+") ? "text-green-600" : "text-red-600"}>
                          {tx.amount}
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-6">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">4</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </TabsContent>

              <TabsContent value="income">
                <div className="text-center py-10 text-muted-foreground">Income transactions will appear here</div>
              </TabsContent>

              <TabsContent value="expense">
                <div className="text-center py-10 text-muted-foreground">Expense transactions will appear here</div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

