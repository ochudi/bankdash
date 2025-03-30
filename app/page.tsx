import { Header } from "@/components/header";
import { CardDisplay } from "@/components/card-display";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import RecentTransactions from "@/components/overview/recent-transactions";
import CardsList from "@/components/overview/cards-list";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Overview" />

      <div className="flex-1 space-y-8 p-6">
        <div className="flex gap-[30px] overflow-x-auto whitespace-nowrap snap-x snap-mandatory pb-4 justify-between">
          <CardsList />
          <RecentTransactions />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Weekly Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-end justify-between gap-2">
                  {/* Simplified chart representation */}
                  {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map(
                    (day, i) => (
                      <div
                        key={day}
                        className="flex flex-col items-center gap-2 w-full"
                      >
                        <div className="flex flex-col gap-1 w-full items-center">
                          <div
                            className="w-3 bg-primary rounded-full"
                            style={{
                              height: `${Math.max(20, Math.random() * 150)}px`,
                            }}
                          ></div>
                          <div
                            className="w-3 bg-teal-400 rounded-full"
                            style={{
                              height: `${Math.max(20, Math.random() * 100)}px`,
                            }}
                          ></div>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {day}
                        </span>
                      </div>
                    )
                  )}
                </div>
                <div className="flex items-center justify-center gap-8 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    <span className="text-sm">Deposit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-teal-400"></div>
                    <span className="text-sm">Withdraw</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Quick Transfer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 overflow-x-auto pb-2">
                  {[
                    { name: "Livia Bator", role: "CEO" },
                    { name: "Randy Press", role: "Director" },
                    { name: "Workman", role: "Designer" },
                  ].map((person, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 min-w-[80px]"
                    >
                      <Avatar className="h-16 w-16">
                        <AvatarImage
                          src={`/placeholder.svg?height=64&width=64`}
                          alt={person.name}
                        />
                        <AvatarFallback>{person.name[0]}</AvatarFallback>
                      </Avatar>
                      <p className="text-sm font-medium">{person.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {person.role}
                      </p>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-16 w-16 flex-shrink-0"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <Input placeholder="Write Amount" className="flex-1" />
                  <Button className="gap-2">
                    Send <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Expense Statistics</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center">
                <div className="relative h-[200px] w-[200px]">
                  {/* Simplified pie chart */}
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-800 origin-bottom-left rotate-0"></div>
                    <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-fuchsia-500 origin-bottom-right rotate-0"></div>
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-400 origin-top-right rotate-0"></div>
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600 origin-top-left rotate-0"></div>
                    <div className="absolute inset-[25%] bg-white dark:bg-background rounded-full"></div>
                  </div>
                </div>
              </CardContent>
              <div className="grid grid-cols-2 gap-2 px-6 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-800"></div>
                  <span className="text-sm">30% Entertainment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-fuchsia-500"></div>
                  <span className="text-sm">20% Investment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <span className="text-sm">15% Bill Expense</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                  <span className="text-sm">35% Others</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Balance History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full relative">
              {/* Simplified area chart */}
              <svg viewBox="0 0 1000 200" className="w-full h-full">
                <path
                  d="M0,150 C100,120 200,180 300,120 C400,60 500,180 600,90 C700,30 800,90 900,60 L900,200 L0,200 Z"
                  fill="rgba(37, 99, 235, 0.2)"
                  stroke="rgb(37, 99, 235)"
                  strokeWidth="2"
                />
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground px-4">
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
                <span>Jan</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
