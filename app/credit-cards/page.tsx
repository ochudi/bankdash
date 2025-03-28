import { Header } from "@/components/header"
import { CardDisplay } from "@/components/card-display"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Apple, CreditCard, Lock } from "lucide-react"

export default function CreditCardsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 space-y-8 p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">My Cards</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardDisplay
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              cardNumber="3778 **** **** 1234"
              validThru="12/22"
              variant="blue"
            />

            <CardDisplay
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              cardNumber="3778 **** **** 1234"
              validThru="12/22"
              variant="white"
            />

            <CardDisplay
              balance="$5,756"
              cardHolder="Eddy Cusuma"
              cardNumber="3778 **** **** 1234"
              validThru="12/22"
              variant="dark"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Card Expense Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] flex items-center justify-center">
                <div className="relative h-[200px] w-[200px]">
                  {/* Simplified pie chart */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600 origin-bottom-left rotate-0"></div>
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-rose-400 origin-bottom-right rotate-0"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-400 origin-top-right rotate-0"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-amber-400 origin-top-left rotate-0"></div>
                    <div className="absolute inset-[25%] bg-white dark:bg-background rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-sm">DBL Bank</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <span className="text-sm">BRC Bank</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                  <span className="text-sm">ABM Bank</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <span className="text-sm">MCP Bank</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card List</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    icon: <CreditCard className="h-5 w-5 text-blue-600" />,
                    bank: "DBL Bank",
                    number: "**** **** 5600",
                    name: "William",
                    color: "bg-blue-100",
                  },
                  {
                    icon: <CreditCard className="h-5 w-5 text-rose-600" />,
                    bank: "BRC Bank",
                    number: "**** **** 4300",
                    name: "Michel",
                    color: "bg-rose-100",
                  },
                  {
                    icon: <CreditCard className="h-5 w-5 text-amber-600" />,
                    bank: "ABM Bank",
                    number: "**** **** 7560",
                    name: "Edward",
                    color: "bg-amber-100",
                  },
                ].map((card, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${card.color}`}>{card.icon}</div>
                      <div>
                        <div className="grid grid-cols-2 gap-x-12 gap-y-1">
                          <p className="text-sm text-muted-foreground">Card Type</p>
                          <p className="text-sm text-muted-foreground">Bank</p>
                          <p className="font-medium">Secondary</p>
                          <p className="font-medium">{card.bank}</p>
                          <p className="text-sm text-muted-foreground">Card Number</p>
                          <p className="text-sm text-muted-foreground">Namain Card</p>
                          <p className="font-medium">{card.number}</p>
                          <p className="font-medium">{card.name}</p>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Add New Card</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-sm text-muted-foreground">
                  Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a
                  Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain
                  cash advances.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-type">Card Type</Label>
                    <Select defaultValue="classic">
                      <SelectTrigger id="card-type">
                        <SelectValue placeholder="Select card type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="classic">Classic</SelectItem>
                        <SelectItem value="gold">Gold</SelectItem>
                        <SelectItem value="platinum">Platinum</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name-on-card">Name On Card</Label>
                    <Input id="name-on-card" placeholder="My Cards" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card-number">Card Number</Label>
                    <Input id="card-number" placeholder="**** **** **** ****" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="expiration-date">Expiration Date</Label>
                    <Select defaultValue="2025-01-25">
                      <SelectTrigger id="expiration-date">
                        <SelectValue placeholder="Select date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2025-01-25">25 January 2025</SelectItem>
                        <SelectItem value="2026-01-25">25 January 2026</SelectItem>
                        <SelectItem value="2027-01-25">25 January 2027</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button>Add Card</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Setting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    icon: <Lock className="h-5 w-5 text-amber-600" />,
                    title: "Block Card",
                    description: "Instantly block your card",
                    color: "bg-amber-100",
                  },
                  {
                    icon: <Lock className="h-5 w-5 text-blue-600" />,
                    title: "Change Pin Code",
                    description: "Choose another pin code",
                    color: "bg-blue-100",
                  },
                  {
                    icon: <Apple className="h-5 w-5 text-rose-600" />,
                    title: "Add to Google Pay",
                    description: "Withdraw without any card",
                    color: "bg-rose-100",
                  },
                  {
                    icon: <Apple className="h-5 w-5 text-teal-600" />,
                    title: "Add to Apple Pay",
                    description: "Withdraw without any card",
                    color: "bg-teal-100",
                  },
                  {
                    icon: <Apple className="h-5 w-5 text-teal-600" />,
                    title: "Add to Apple Store",
                    description: "Withdraw without any card",
                    color: "bg-teal-100",
                  },
                ].map((setting, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${setting.color}`}>{setting.icon}</div>
                    <div>
                      <p className="font-medium">{setting.title}</p>
                      <p className="text-sm text-muted-foreground">{setting.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

