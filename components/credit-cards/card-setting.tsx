import { Card, CardContent } from "@/components/ui/card";
import { CiCreditCard1, CiLock } from "react-icons/ci";
import { TfiApple } from "react-icons/tfi";
import { FaGoogle } from "react-icons/fa";

const CardSetting = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <h2 className="text-xl font-semibold">Card Setting</h2>
      </div>
      <Card>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                icon: <CiCreditCard1 className="h-5 w-5 text-amber-600" />,
                title: "Block Card",
                description: "Instantly block your card",
                color: "bg-amber-100",
              },
              {
                icon: <CiLock className="h-5 w-5 text-blue-600" />,
                title: "Change Pin Code",
                description: "Choose another pin code",
                color: "bg-blue-100",
              },
              {
                icon: <FaGoogle className="h-5 w-5 text-rose-600" />,
                title: "Add to Google Pay",
                description: "Withdraw without any card",
                color: "bg-rose-100",
              },
              {
                icon: <TfiApple className="h-5 w-5 text-teal-600" />,
                title: "Add to Apple Pay",
                description: "Withdraw without any card",
                color: "bg-teal-100",
              },
              {
                icon: <TfiApple className="h-5 w-5 text-teal-600" />,
                title: "Add to Apple Store",
                description: "Withdraw without any card",
                color: "bg-teal-100",
              },
            ].map((setting, i) => (
              <div key={i} className="flex items-center gap-4 pt-3.5">
                <div className={`p-3 rounded-full ${setting.color}`}>
                  {setting.icon}
                </div>
                <div>
                  <p className="font-medium">{setting.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {setting.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardSetting;
