import { Header } from "@/components/header"
import { CardDisplay } from "@/components/card-display"
import { StatCard } from "@/components/stat-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, DollarSign, LineChart, Wallet } from "lucide-react"

export default function AccountsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 space-y-8 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<Wallet className="h-6 w-6 text-amber-600" />}
            title="My Balance"
            value="$12,750"
            iconColor="bg-amber-100"
          />

          <StatCard
            icon={<DollarSign className="h-6 w-6 text-blue-600" />}
            title="Income"
            value="$5,600"
            iconColor="bg-blue-100"
          />

          <StatCard
            icon={<BarChart className="h-6 w-6 text-rose-600" />}
            title="Expense"
            value="$3,460"
            iconColor="bg-rose-100"
          />

          <StatCard
            icon={<LineChart className="h-6 w-6 text-teal-600" />}
            title="Total Saving"
            value="$7,920"
            iconColor="bg-teal-100"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Last Transaction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: <LineChart className="h-5 w-5 text-teal-600" />,
                      title: "Spotify Subscription",
                      date: "25 Jan 2021",
                      type: "Shopping",
                      card: "1234 ****",
                      status: "Pending",
                      amount: "-$150",
                      color: "bg-teal-100",
                    },
                    {
                      icon: <LineChart className="h-5 w-5 text-blue-600" />,
                      title: "Mobile Service",
                      date: "25 Jan 2021",
                      type: "Service",
                      card: "1234 ****",
                      status: "Completed",
                      amount: "-$340",
                      color: "bg-blue-100",
                    },
                    {
                      icon: <LineChart className="h-5 w-5 text-rose-600" />,
                      title: "Emilly Wilson",
                      date: "25 Jan 2021",
                      type: "Transfer",
                      card: "1234 ****",
                      status: "Completed",
                      amount: "+$780",
                      color: "bg-rose-100",
                    },
                  ].map((tx, i) => (
                    <div key={i} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${tx.color}`}>{tx.icon}</div>
                        <div>
                          <p className="font-medium">{tx.title}</p>
                          <p className="text-sm text-muted-foreground">{tx.date}</p>
                        </div>
                      </div>

                      <div className="text-sm font-medium">{tx.type}</div>
                      <div className="text-sm font-medium">{tx.card}</div>
                      <div className="text-sm font-medium">{tx.status}</div>
                      <div
                        className={`text-sm font-medium text-right ${tx.amount.startsWith("+") ? "text-green-600" : "text-red-600"}`}
                      >
                        {tx.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Debit & Credit Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="font-medium">$7,560 Debited</span>
                    <span>&</span>
                    <span className="font-medium">$5,420 Credited in this Week</span>
                  </div>

                  <div className="h-[200px] flex items-end justify-between gap-2">
                    {/* Simplified chart representation */}
                    {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                      <div key={day} className="flex flex-col items-center gap-2 w-full">
                        <div className="flex flex-col gap-1 w-full items-center">
                          <div
                            className="w-6 bg-primary rounded-t-md"
                            style={{ height: `${Math.max(20, Math.random() * 150)}px` }}
                          ></div>
                          <div
                            className="w-6 bg-amber-400 rounded-t-md"
                            style={{ height: `${Math.max(20, Math.random() * 100)}px` }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground">{day}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-sm">Debit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                      <span className="text-sm">Credit</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">My Card</h2>
              <Button variant="ghost" className="text-sm">
                See All
              </Button>
            </div>

            <CardDisplay
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              cardNumber="3778 **** **** 1234"
              validThru="12/22"
              variant="blue"
            />

            <Card>
              <CardHeader>
                <CardTitle>Invoices Sent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      icon: <LineChart className="h-5 w-5 text-teal-600" />,
                      title: "Apple Store",
                      date: "5h ago",
                      amount: "$450",
                      color: "bg-teal-100",
                    },
                    {
                      icon: <LineChart className="h-5 w-5 text-amber-600" />,
                      title: "Michael",
                      date: "2 days ago",
                      amount: "$160",
                      color: "bg-amber-100",
                    },
                    {
                      icon: <LineChart className="h-5 w-5 text-blue-600" />,
                      title: "Playstation",
                      date: "5 days ago",
                      amount: "$1085",
                      color: "bg-blue-100",
                    },
                    {
                      icon: <LineChart className="h-5 w-5 text-rose-600" />,
                      title: "William",
                      date: "10 days ago",
                      amount: "$90",
                      color: "bg-rose-100",
                    },
                  ].map((invoice, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${invoice.color}`}>{invoice.icon}</div>
                        <div>
                          <p className="font-medium">{invoice.title}</p>
                          <p className="text-sm text-muted-foreground">{invoice.date}</p>
                        </div>
                      </div>
                      <p className="font-medium">{invoice.amount}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

