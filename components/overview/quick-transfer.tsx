import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { GrSend } from "react-icons/gr";
import { Input } from "../ui/input";

const users = [
  { name: "Livia Bator", role: "CEO", image: "/avatars/livia.jpg" },
  { name: "Randy Press", role: "Director", image: "/avatars/randy.jpg" },
  { name: "Workman", role: "Designer", image: "/avatars/workman.jpg" },
];

const QuickTransfer = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
        Quick Transfer
      </h2>

      <Card className="flex rounded-2xl p-4 bg-white dark:bg-gray-900 w-full justify-center">
        <CardContent className="p-4 self-center">
          <div className="flex items-center gap-6 overflow-x-auto p-3">
            {users.map((user, i) => (
              <div key={i} className="flex flex-col items-center">
                <Avatar className="h-14 w-14 ring-2 ring-gray-200 dark:ring-gray-700">
                  <AvatarImage src={user.image} alt={user.name} />
                  <AvatarFallback>
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                  <p className="text-sm font-medium text-gray-900 dark:text-white pt-4">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user.role}
                  </p>
              </div>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-16 w-16 flex-shrink-0 shadow-md"
            >
              <ChevronRight className="h-6 w-6 text-[#718EBF]" />
            </Button>
          </div>

          {/* Amount Input & Send Button */}
          <div className="flex items-center gap-3 lg:gap-5 mt-4 p-3">
            <div className="text-[#718EBF] font-normal">Write Amount</div>

            <div className="relative w-[240px] lg:w-[265px] gap-[27px]">
              <Input
                placeholder="525.50"
                className="w-full rounded-full pr-[6rem] h-[50px] text-lg font-medium bg-[#EDF1F7] dark:bg-gray-800"
              />
              <Button className="absolute right-0 top-1/2 -translate-y-1/2 w-[125px] h-[50px] rounded-full bg-[#1814F3] hover:bg-blue-600 text-white flex items-center justify-center gap-2">
                Send <GrSend className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickTransfer;
