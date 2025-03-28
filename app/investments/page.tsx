import { Header } from "@/components/header"
import { StatCard } from "@/components/stat-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, DollarSign, LineChart, RefreshCcw } from "lucide-react"

export default function InvestmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 space-y-8 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            icon={<DollarSign className="h-6 w-6 text-teal-600" />}
            title="Total Invested Amount"
            value="$150,000"
            iconColor="bg-teal-100"
          />

          <StatCard
            icon={<BarChart className="h-6 w-6 text-rose-600" />}
            title="Number of Investments"
            value="1,250"
            iconColor="bg-rose-100"
          />

          <StatCard
            icon={<RefreshCcw className="h-6 w-6 text-blue-600" />}
            title="Rate of Return"
            value="+5.80%"
            iconColor="bg-blue-100"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Yearly Total Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full relative">
                {/* Simplified line chart */}
                <svg viewBox="0 0 1000 200" className="w-full h-full">
                  <path
                    d="M100,180 C150,160 200,120 300,140 C400,160 500,80 600,60 C700,40 800,80 900,60"
                    fill="none"
                    stroke="rgb(234, 179, 8)"
                    strokeWidth="3"
                  />
                  <circle cx="100" cy="180" r="6" fill="rgb(234, 179, 8)" />
                  <circle cx="300" cy="140" r="6" fill="rgb(234, 179, 8)" />
                  <circle cx="500" cy="80" r="6" fill="rgb(234, 179, 8)" />
                  <circle cx="700" cy="40" r="6" fill="rgb(234, 179, 8)" />
                  <circle cx="900" cy="60" r="6" fill="rgb(234, 179, 8)" />
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground px-4">
                  <span>2016</span>
                  <span>2017</span>
                  <span>2018</span>
                  <span>2019</span>
                  <span>2020</span>
                  <span>2021</span>
                </div>
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-muted-foreground py-4">
                  <span>$40,000</span>
                  <span>$30,000</span>
                  <span>$20,000</span>
                  <span>$10,000</span>
                  <span>$0</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full relative">
                {/* Simplified area chart */}
                <svg viewBox="0 0 1000 200" className="w-full h-full">
                  <path
                    d="M0,150 C100,120 200,180 300,120 C400,60 500,180 600,90 C700,30 800,90 900,60 L900,200 L0,200 Z"
                    fill="rgba(20, 184, 166, 0.2)"
                    stroke="rgb(20, 184, 166)"
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground px-4">
                  <span>2016</span>
                  <span>2017</span>
                  <span>2018</span>
                  <span>2019</span>
                  <span>2020</span>
                  <span>2021</span>
                </div>
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-muted-foreground py-4">
                  <span>$40,000</span>
                  <span>$30,000</span>
                  <span>$20,000</span>
                  <span>$10,000</span>
                  <span>$0</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>My Investment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  {
                    icon: <LineChart className="h-5 w-5 text-rose-600" />,
                    title: "Apple Store",
                    category: "E-commerce, Marketplace",
                    value: "$54,000",
                    return: "+16%",
                    color: "bg-rose-100",
                  },
                  {
                    icon: <LineChart className="h-5 w-5 text-blue-600" />,
                    title: "Samsung Mobile",
                    category: "E-commerce, Marketplace",
                    value: "$25,300",
                    return: "-4%",
                    color: "bg-blue-100",
                  },
                  {
                    icon: <LineChart className="h-5 w-5 text-amber-600" />,
                    title: "Tesla Motors",
                    category: "Electric Vehicles",
                    value: "$8,200",
                    return: "+25%",
                    color: "bg-amber-100",
                  },
                ].map((investment, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full ${investment.color}`}>{investment.icon}</div>
                      <div>
                        <p className="font-medium">{investment.title}</p>
                        <p className="text-sm text-muted-foreground">{investment.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{investment.value}</p>
                      <p className={`text-sm ${investment.return.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                        {investment.return}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Trending Stock</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>SL No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Return</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { id: "01", name: "Trivago", price: "$520", return: "+5%" },
                    { id: "02", name: "Canon", price: "$480", return: "+10%" },
                    { id: "03", name: "Uber Food", price: "$350", return: "-3%" },
                    { id: "04", name: "Nokia", price: "$940", return: "+2%" },
                    { id: "05", name: "Tiktok", price: "$670", return: "-12%" },
                  ].map((stock) => (
                    <TableRow key={stock.id}>
                      <TableCell>{stock.id}</TableCell>
                      <TableCell>{stock.name}</TableCell>
                      <TableCell>{stock.price}</TableCell>
                      <TableCell className={stock.return.startsWith("+") ? "text-green-600" : "text-red-600"}>
                        {stock.return}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

