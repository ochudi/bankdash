import { Card, CardContent } from "@/components/ui/card";
import { FaSpotify } from "react-icons/fa6";
import { VscTools } from "react-icons/vsc";
import { GoPerson } from "react-icons/go";

const LastTransaction = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <h2 className="text-xl font-semibold">Last Transaction</h2>
      </div>
      <Card>
        <CardContent className="p-4">
          <div className="space-y-4">
            {[
              {
                icon: <FaSpotify className="h-7 w-7 text-[#16DBCC]" />,
                title: "Spotify Subscription",
                date: "25 Jan 2021",
                type: "Shopping",
                card: "1234 ****",
                status: "Pending",
                amount: "-$150",
                color: "bg-[#DCFAF8]",
              },
              {
                icon: <VscTools className="h-7 w-7 text-[#396AFF]" />,
                title: "Mobile Service",
                date: "25 Jan 2021",
                type: "Service",
                card: "1234 ****",
                status: "Completed",
                amount: "-$340",
                color: "bg-[#E7EDFF]",
              },
              {
                icon: <GoPerson className="h-7 w-7 text-[#FF82AC]" />,
                title: "Emilly Wilson",
                date: "25 Jan 2021",
                type: "Transfer",
                card: "1234 ****",
                status: "Completed",
                amount: "+$780",
                color: "bg-[#FFE0EB]",
              },
            ].map((tx, i) => (
              <div
                key={i}
                className="grid grid-cols-2 lg:grid-cols-6 gap-2 items-center"
              >
                <div className="flex items-center gap-3 cols-span-1 lg:col-span-3">
                  <div className={`p-4 rounded-3xl ${tx.color}`}>{tx.icon}</div>
                  <div>
                    <p className="font-medium">{tx.title}</p>
                    <p className="text-sm text-[#718EBF]">{tx.date}</p>
                  </div>
                </div>

                <div className="hidden lg:block text-xs lg:text-sm font-light lg:font-medium text-[#718EBF]">
                  {tx.type}
                </div>
                <div className="hidden xl:block text-xs lg:text-sm font-light lg:font-medium text-[#718EBF]">
                  {tx.card}
                </div>
                <div className="hidden lg:block text-md md:text-xs lg:text-sm font-light lg:font-medium text-[#718EBF]">
                  {tx.status}
                </div>
                <div
                  className={`text-sm md:text-xs lg:text-sm md:font-light lg:font-medium text-right xl:text-left ${
                    tx.amount.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {tx.amount}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LastTransaction;
