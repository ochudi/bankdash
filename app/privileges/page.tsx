import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Gift, Star } from "lucide-react"

export default function PrivilegesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 space-y-8 p-6">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-8">
          <h1 className="text-3xl font-bold">My Privileges</h1>
          <p className="text-muted-foreground">
            Enjoy exclusive benefits and rewards as a valued BankDash customer. Explore special offers, discounts, and
            premium services tailored just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-0">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Premium Travel</CardTitle>
                  <CardDescription>Exclusive travel benefits</CardDescription>
                </div>
                <Badge variant="secondary">Gold</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center my-4">
                <div className="h-24 w-24 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <Award className="h-12 w-12 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Airport lounge access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Priority boarding</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Travel insurance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Hotel upgrades</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Activate Benefits</Button>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950 border-0">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Shopping Rewards</CardTitle>
                  <CardDescription>Special discounts & cashback</CardDescription>
                </div>
                <Badge variant="secondary">Platinum</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center my-4">
                <div className="h-24 w-24 rounded-full bg-rose-100 dark:bg-rose-900 flex items-center justify-center">
                  <Gift className="h-12 w-12 text-rose-600 dark:text-rose-400" />
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>5% cashback on all purchases</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Early access to sales</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Premium partner discounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Free shipping</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Activate Benefits</Button>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-teal-950 dark:to-emerald-950 border-0">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Lifestyle Perks</CardTitle>
                  <CardDescription>Entertainment & dining benefits</CardDescription>
                </div>
                <Badge variant="secondary">Diamond</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center my-4">
                <div className="h-24 w-24 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
                  <Award className="h-12 w-12 text-teal-600 dark:text-teal-400" />
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>VIP event access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Fine dining reservations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Streaming service discounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Concierge service</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Activate Benefits</Button>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950 border-0">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Financial Advisory</CardTitle>
                  <CardDescription>Personalized financial guidance</CardDescription>
                </div>
                <Badge variant="secondary">Elite</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center my-4">
                <div className="h-24 w-24 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                  <Award className="h-12 w-12 text-amber-600 dark:text-amber-400" />
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Dedicated financial advisor</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Investment portfolio review</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Tax planning assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Retirement planning</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Activate Benefits</Button>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950 dark:to-violet-950 border-0">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Premium Support</CardTitle>
                  <CardDescription>Priority customer service</CardDescription>
                </div>
                <Badge variant="secondary">VIP</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center my-4">
                <div className="h-24 w-24 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <Award className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>24/7 dedicated support line</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Priority issue resolution</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Personal relationship manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>In-branch priority service</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Activate Benefits</Button>
            </CardFooter>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950 border-0">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">Health & Wellness</CardTitle>
                  <CardDescription>Exclusive health benefits</CardDescription>
                </div>
                <Badge variant="secondary">Premium</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center my-4">
                <div className="h-24 w-24 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center">
                  <Award className="h-12 w-12 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Health insurance discounts</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Gym membership benefits</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Wellness program access</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500" />
                  <span>Mental health resources</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Activate Benefits</Button>
            </CardFooter>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Loyalty Points</CardTitle>
            <CardDescription>Track and redeem your loyalty points for exclusive rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
                <div
                  className="absolute inset-0 rounded-full border-8 border-primary"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    transform: "rotate(75deg)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-3xl font-bold">7,520</span>
                  <span className="text-sm text-muted-foreground">points</span>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-lg font-medium">Current Tier: Gold</h3>
                  <p className="text-sm text-muted-foreground">2,480 points until Platinum tier</p>
                </div>

                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: "75%" }}></div>
                </div>

                <div className="flex justify-between text-sm">
                  <span>0</span>
                  <span>5,000</span>
                  <span>10,000</span>
                </div>

                <div className="flex gap-4">
                  <Button>Redeem Points</Button>
                  <Button variant="outline">View History</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

