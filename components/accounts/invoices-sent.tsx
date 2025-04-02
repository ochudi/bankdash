import { Card, CardContent } from "@/components/ui/card";
import { RiAppleLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { IoLogoPlaystation } from "react-icons/io";

const InvoicesSent = () => {
  const data = [
    {
      icon: <RiAppleLine className="h-7 w-7 text-[#16DBCC]" />,
      name: "Apple Store",
      date: "5h ago",
      amount: "$450",
      color: "bg-[#DCFAF8]",
    },
    {
      icon: <GoPerson className="h-7 w-7 text-[#FFBB38]" />,
      name: "Michael",
      date: "2 days ago",
      amount: "$160",
      color: "bg-[#FFF5D9]",
    },
    {
      icon: <IoLogoPlaystation className="h-7 w-7 text-[#396AFF]" />,
      name: "PlayStation",
      date: "5 days ago",
      amount: "$1080",
      color: "bg-[#E7EDFF]",
    },
    {
      icon: <GoPerson className="h-7 w-7 text-[#FF82AC]" />,
      name: "Williams",
      date: "10 days ago",
      amount: "$90",
      color: "bg-[#FFE0EB]",
    },
    {
      icon: <RiAppleLine className="h-7 w-7 text-[#16DBCC]" />,
      name: "Apple Store",
      date: "15 days ago",
      amount: "$450",
      color: "bg-[#DCFAF8]",
    },
    {
      icon: <GoPerson className="h-7 w-7 text-[#FFBB38]" />,
      name: "Michael",
      date: "20 days ago",
      amount: "$160",
      color: "bg-[#FFF5D9]",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <h2 className="text-xl font-semibold">Invoices Sent</h2>
      </div>
      <Card className="w-full min-w-[265px] lg:min-w-[350px] min-h-[235px] align-middle items-center justify-center py-5 px-[10px]">
        <CardContent className="p-4">
          <div className="space-y-4">
            {data.map((tx, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-4 rounded-3xl ${tx.color}`}>{tx.icon}</div>
                  <div>
                    <p className="font-medium">{tx.name}</p>
                    <p className="text-sm text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <p className="text-[#718EBF]">{tx.amount}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InvoicesSent;
