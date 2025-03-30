import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { ChevronRight, Send } from "lucide-react";
import { Input } from "../ui/input";

const QuickTransfer = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <h2 className="text-xl font-semibold">Quick Transfer</h2>
      </div>
      <Card>
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
                <p className="text-xs text-muted-foreground">{person.role}</p>
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
  );
};

export default QuickTransfer;
