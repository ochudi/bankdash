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

      <Card className="rounded-2xl p-4 bg-white dark:bg-gray-900 w-full h-full">
        <CardContent className="p-4 flex flex-col items-center justify-center">
          {/* User List */}
          <div className="flex items-center lg:justify-center gap-4 sm:gap-6 overflow-x-auto w-full p-3">
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
                <p className="text-sm font-medium text-gray-900 dark:text-white pt-2 sm:pt-4">
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
              className="rounded-full h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0 shadow-md"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#718EBF]" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 mt-10 w-full lg:justify-center">
            <span className="text-[#718EBF] font-normal">Write Amount</span>

            <div className="relative w-full sm:w-[240px] lg:w-[265px]">
              <Input
                placeholder="525.50"
                className="w-full rounded-full pr-[6rem] h-[45px] sm:h-[50px] text-lg font-medium bg-[#EDF1F7] dark:bg-gray-800"
              />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 w-[110px] sm:w-[125px] h-[45px] sm:h-[50px] rounded-full bg-[#1814F3] hover:bg-blue-600 text-white flex items-center justify-center gap-2">
                Send <GrSend className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuickTransfer;
