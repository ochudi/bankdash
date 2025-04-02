import { Header } from "@/components/header";
import MyInvestment from "@/components/investment/investment";
import MonthlyRevenue from "@/components/investment/monthly-revenue";
import TrendingStock from "@/components/investment/trending-stock";
import YearlyTotalInvestment from "@/components/investment/yearly-investment";
import { StatCard } from "@/components/stat-card";
import { FaSackDollar, FaChartPie, FaRepeat } from "react-icons/fa6";

const stats = [
  {
    icon: <FaSackDollar className="h-6 w-6 text-[#16DBCC]" />,
    title: "Total Invested Amount",
    value: "$150,000",
    iconColor: "bg-teal-100",
  },
  {
    icon: <FaChartPie className="h-6 w-6 text-[#FF82AC]" />,
    title: "Number of Investments",
    value: "1,250",
    iconColor: "bg-rose-100",
  },
  {
    icon: <FaRepeat className="h-6 w-6 text-[#396AFF]" />,
    title: "Rate of Return",
    value: "+5.80%",
    iconColor: "bg-blue-100",
  },
];

export default function InvestmentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1 space-y-8 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <YearlyTotalInvestment />
          <MonthlyRevenue />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <MyInvestment />
          </div>
          <div className="col-span-1">
            <TrendingStock />
          </div>
        </div>
      </div>
    </div>
  );
}
