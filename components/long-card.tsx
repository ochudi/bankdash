import { Card, CardContent } from "@/components/ui/card";

const LongCard = ({
  longCard,
}: {      
  longCard: {
    color: string;
    icon: React.ReactNode;
    cardType: string;
    bankName: string;
    cardNumber: string | number;
    name: string;
  };
}) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4 grid grid-cols-3 lg:grid-cols-6 gap-4 justify-between">
        <div className="flex items-center justify-between col-span-2">
          <div className="flex items-center gap-3">
            <div className={`p-4 rounded-2xl ${longCard.color}`}>
              {longCard.icon}
            </div>
            <div>
              <p className="font-medium">Card Type</p>
              <p className="text-sm text-[#718EBF]">
                {longCard.cardType}
              </p>
            </div>
          </div>
        </div>

        <div className="text-left hidden lg:col-span-1 lg:block pt-1">
          <p className="font-medium">Bank</p>
          <p className="text-sm text-[#718EBF]">{longCard.bankName}</p>
        </div>

        <div className="text-left hidden lg:col-span-1 lg:block pt-1">
          <p className="font-medium">Card Number</p>
          <p className="text-sm text-[#718EBF]">{longCard.cardNumber}</p>
        </div>

        <div className="text-left hidden lg:col-span-1 lg:block pt-1">
          <p className="font-medium">Card Name</p>
          <p className="text-sm text-[#718EBF]">{longCard.name}</p>
        </div>

        <div className="text-right lg:text-left col-span-1 lg:block pt-4">
          <p className="text-sm text-[#1814F3]">View Details</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LongCard;
