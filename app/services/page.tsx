import { Header } from "@/components/header"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Banknote, Briefcase, Heart, ShieldCheck, ShoppingBag, User } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 space-y-8 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ServiceCard
            icon={<ShieldCheck className="h-6 w-6 text-blue-600" />}
            title="Life Insurance"
            value="Unlimited protection"
            iconColor="bg-blue-100"
          />

          <ServiceCard
            icon={<ShoppingBag className="h-6 w-6 text-amber-600" />}
            title="Shopping"
            value="Buy. Think. Grow."
            iconColor="bg-amber-100"
          />

          <ServiceCard
            icon={<Heart className="h-6 w-6 text-teal-600" />}
            title="Safety"
            value="We are your allies"
            iconColor="bg-teal-100"
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Bank Services List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  icon: <Banknote className="h-6 w-6 text-rose-600" />,
                  title: "Business loans",
                  description: "It is a long established",
                  iconBg: "bg-rose-100",
                },
                {
                  icon: <Briefcase className="h-6 w-6 text-amber-600" />,
                  title: "Checking accounts",
                  description: "It is a long established",
                  iconBg: "bg-amber-100",
                },
                {
                  icon: <Banknote className="h-6 w-6 text-rose-600" />,
                  title: "Savings accounts",
                  description: "It is a long established",
                  iconBg: "bg-rose-100",
                },
                {
                  icon: <User className="h-6 w-6 text-blue-600" />,
                  title: "Debit and credit cards",
                  description: "It is a long established",
                  iconBg: "bg-blue-100",
                },
                {
                  icon: <ShieldCheck className="h-6 w-6 text-teal-600" />,
                  title: "Life Insurance",
                  description: "It is a long established",
                  iconBg: "bg-teal-100",
                },
                {
                  icon: <Banknote className="h-6 w-6 text-rose-600" />,
                  title: "Business loans",
                  description: "It is a long established",
                  iconBg: "bg-rose-100",
                },
              ].map((service, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center border-b pb-6">
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-full ${service.iconBg}`}>{service.icon}</div>
                    <div>
                      <p className="font-medium">{service.title}</p>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>

                  <div className="md:col-span-3 grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i}>
                        <p className="text-sm font-medium">Lorem Ipsum</p>
                        <p className="text-xs text-muted-foreground">Many publishing</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

