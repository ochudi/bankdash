import { Card, CardContent } from "@/components/ui/card";

const InvestmentCard = ({
  investment,
}: {
  investment: {
    color: string;
    icon: React.ReactNode;
    title: string;
    category: string;
    value: string | number;
    return: string;
  };
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4 grid grid-cols-4 gap-4">
        <div className="flex items-center justify-between col-span-2">
          <div className="flex items-center gap-3">
            <div className={`p-4 rounded-2xl ${investment.color}`}>
              {investment.icon}
            </div>
            <div>
              <p className="font-medium">{investment.title}</p>
              <p className="text-sm text-[#718EBF]">
                {investment.category}
              </p>
            </div>
          </div>
        </div>
        <div className="text-left col-span-1 hidden lg:block pt-1">
          <p className="font-medium">{investment.value}</p>
          <p className="text-sm text-[#718EBF]">Investment</p>
        </div>
        <div className="col-span-2 lg:col-span-1 text-right lg:text-left pt-1">
          <p
            className={`text-sm ${
              investment.return.startsWith("+")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {investment.return}
          </p>
          <p className="text-sm text-[#718EBF]">Return Value</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentCard;
