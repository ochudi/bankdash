import { Card, CardContent } from "@/components/ui/card";
import { PiPaypalLogo, PiCreditCard } from "react-icons/pi";
import { BsCoin } from "react-icons/bs";

const RecentTransactions = () => {
  const data = [
    {
      icon: <PiCreditCard className="h-5 w-5 text-[#FFBB38]" />,
      name: "Deposit from my Card",
      date: "28 January 2021",
      amount: "-$850",
      color: "bg-[#FFF5D9]",
    },
    {
      icon: <PiPaypalLogo className="h-5 w-5 text-[#396AFF]" />,
      name: "Deposit Paypal",
      date: "25 January 2021",
      amount: "+$2,500",
      color: "bg-[#E7EDFF]",
    },
    {
      icon: <BsCoin className="h-5 w-5 text-[#16DBCC]" />,
      name: "Jemi Wilson",
      date: "21 January 2021",
      amount: "+$5,400",
      color: "bg-[#DCFAF8]",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
      </div>
      <Card className="w-full min-w-[265px] lg:min-w-[350px] min-h-[235px] align-middle items-center justify-center pt-5 px-[10px]">
        <CardContent className="p-4">
          <div className="space-y-4">
            {data.map((tx, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${tx.color}`}>
                    {tx.icon}
                  </div>
                  <div>
                    <p className="font-medium">{tx.name}</p>
                    <p className="text-sm text-muted-foreground">{tx.date}</p>
                  </div>
                </div>
                <p
                  className={
                    tx.amount.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {tx.amount}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentTransactions;
