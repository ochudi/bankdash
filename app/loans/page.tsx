import { Header } from "@/components/header"
import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Banknote, Briefcase, Wrench } from "lucide-react"

export default function LoansPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 space-y-8 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<Banknote className="h-6 w-6 text-blue-600" />}
            title="Personal Loans"
            value="$50,000"
            iconColor="bg-blue-100"
          />

          <StatCard
            icon={<Briefcase className="h-6 w-6 text-amber-600" />}
            title="Corporate Loans"
            value="$100,000"
            iconColor="bg-amber-100"
          />

          <StatCard
            icon={<Banknote className="h-6 w-6 text-rose-600" />}
            title="Business Loans"
            value="$500,000"
            iconColor="bg-rose-100"
          />

          <StatCard
            icon={<Wrench className="h-6 w-6 text-teal-600" />}
            title="Custom Loans"
            value="Choose Money"
            iconColor="bg-teal-100"
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Loans Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>SL No</TableHead>
                  <TableHead>Loan Money</TableHead>
                  <TableHead>Left to repay</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Interest rate</TableHead>
                  <TableHead>Installment</TableHead>
                  <TableHead>Repay</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    id: "01",
                    amount: "$100,000",
                    left: "$40,500",
                    duration: "8 Months",
                    interest: "12%",
                    installment: "$2,000 / month",
                  },
                  {
                    id: "02",
                    amount: "$500,000",
                    left: "$250,000",
                    duration: "36 Months",
                    interest: "10%",
                    installment: "$8,000 / month",
                  },
                  {
                    id: "03",
                    amount: "$900,000",
                    left: "$40,500",
                    duration: "12 Months",
                    interest: "12%",
                    installment: "$5,000 / month",
                  },
                  {
                    id: "04",
                    amount: "$50,000",
                    left: "$40,500",
                    duration: "25 Months",
                    interest: "5%",
                    installment: "$2,000 / month",
                  },
                  {
                    id: "05",
                    amount: "$50,000",
                    left: "$40,500",
                    duration: "5 Months",
                    interest: "16%",
                    installment: "$10,000 / month",
                  },
                  {
                    id: "06",
                    amount: "$80,000",
                    left: "$25,500",
                    duration: "14 Months",
                    interest: "8%",
                    installment: "$2,000 / month",
                  },
                  {
                    id: "07",
                    amount: "$12,000",
                    left: "$5,500",
                    duration: "9 Months",
                    interest: "13%",
                    installment: "$500 / month",
                  },
                  {
                    id: "08",
                    amount: "$160,000",
                    left: "$100,800",
                    duration: "3 Months",
                    interest: "12%",
                    installment: "$900 / month",
                  },
                ].map((loan) => (
                  <TableRow key={loan.id}>
                    <TableCell>{loan.id}</TableCell>
                    <TableCell>{loan.amount}</TableCell>
                    <TableCell>{loan.left}</TableCell>
                    <TableCell>{loan.duration}</TableCell>
                    <TableCell>{loan.interest}</TableCell>
                    <TableCell>{loan.installment}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        Repay
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow className="font-medium">
                  <TableCell>Total</TableCell>
                  <TableCell>$125,0000</TableCell>
                  <TableCell>$750,000</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>$50,000 / month</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

