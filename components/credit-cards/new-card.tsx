import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const NewCardForm = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <h2 className="text-xl font-semibold">Add New Card</h2>
      </div>
      <Card>
        <CardContent>
          <div className="space-y-6 pt-5">
            <p className="text-sm text-muted-foreground">
              Credit Card generally means a plastic card issued by Scheduled
              Commercial Banks assigned to a Cardholder, with a credit limit,
              that can be used to purchase goods and services on credit or
              obtain cash advances.
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
                <Input id="name-on-card" placeholder="Full Name" />
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
    </div>
  );
};

export default NewCardForm;
