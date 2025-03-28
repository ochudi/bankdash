"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pencil } from "lucide-react"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("edit-profile")

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 p-6">
        <Card>
          <CardContent className="p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="edit-profile">Edit Profile</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="edit-profile" className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <Button size="icon" variant="default" className="absolute bottom-0 right-0 h-8 w-8 rounded-full">
                        <Pencil className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                    <div className="space-y-2">
                      <Label htmlFor="your-name">Your Name</Label>
                      <Input id="your-name" defaultValue="Charlene Reed" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="user-name">User Name</Label>
                      <Input id="user-name" defaultValue="Charlene Reed" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="charlenereed@gmail.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" defaultValue="**********" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Select defaultValue="1990-01-25">
                        <SelectTrigger id="dob">
                          <SelectValue placeholder="Select date" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1990-01-25">25 January 1990</SelectItem>
                          <SelectItem value="1991-01-25">25 January 1991</SelectItem>
                          <SelectItem value="1992-01-25">25 January 1992</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="present-address">Present Address</Label>
                      <Input id="present-address" defaultValue="San Jose, California, USA" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="permanent-address">Permanent Address</Label>
                      <Input id="permanent-address" defaultValue="San Jose, California, USA" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="San Jose" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postal-code">Postal Code</Label>
                      <Input id="postal-code" defaultValue="45962" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="USA" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Save</Button>
                </div>
              </TabsContent>

              <TabsContent value="preferences" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currency">Currency</Label>
                    <Select defaultValue="usd">
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="eur">EUR</SelectItem>
                        <SelectItem value="gbp">GBP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timezone">Time Zone</Label>
                    <Select defaultValue="gmt-12">
                      <SelectTrigger id="timezone">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gmt-12">(GMT-12:00) International Date Line West</SelectItem>
                        <SelectItem value="gmt-11">(GMT-11:00) Midway Island, Samoa</SelectItem>
                        <SelectItem value="gmt-10">(GMT-10:00) Hawaii</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification</h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="digital-currency" className="flex-1">
                        I send or receive digita currency
                      </Label>
                      <Switch id="digital-currency" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="merchant-order" className="flex-1">
                        I receive merchant order
                      </Label>
                      <Switch id="merchant-order" />
                    </div>

                    <div className="flex items-center justify-between">
                      <Label htmlFor="recommendations" className="flex-1">
                        There are recommendation for my account
                      </Label>
                      <Switch id="recommendations" defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Save</Button>
                </div>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Two-factor Authentication</h3>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="two-factor" className="flex-1">
                      Enable or disable two factor authentication
                    </Label>
                    <Switch id="two-factor" defaultChecked />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Change Password</h3>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Current Password</Label>
                      <Input id="current-password" type="password" defaultValue="**********" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="new-password">New Password</Label>
                      <Input id="new-password" type="password" defaultValue="**********" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button>Save</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

