
import InvestmentCard from "@/components/investment-card";
import { SiApple, SiSamsung, SiTesla } from "react-icons/si";

const investmentsData = [
  {
    icon: <SiApple className="h-5 w-5" />,
    title: "Apple Store",
    category: "E–commerce",
    value: "$54,000",
    return: "+16%",
    color: "text-rose-600 bg-rose-100",
  },
  {
    icon: <SiSamsung className="h-5 w-5" />,
    title: "Samsung Mobile",
    category: "Marketplace",
    value: "$25,300",
    return: "-4%",
    color: "text-blue-600 bg-blue-100",
  },
  {
    icon: <SiTesla className="h-5 w-5" />,
    title: "Tesla Motors",
    category: "Electric Vehicles",
    value: "$8,200",
    return: "+25%",
    color: "text-amber-600 bg-amber-100",
  },
];

const MyInvestment = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold">My Investment</h2>
      <div className="flex flex-col gap-4">
        {investmentsData.map((investment, i) => (
          <InvestmentCard key={i} investment={investment} />
        ))}
      </div>
    </div>
  );
};

export default MyInvestment;
