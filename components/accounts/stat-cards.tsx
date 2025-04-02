import { StatCard } from "@/components/stat-card";
import { IoReceipt } from "react-icons/io5";
import {
  FaSackDollar,
  FaHandHoldingDollar,
  FaPiggyBank,
} from "react-icons/fa6";

const StatCardList = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
      <StatCard
        icon={<FaSackDollar className="h-6 w-6 text-[#FFBB38]" />}
        title="My Balance"
        value="$12,750"
        iconColor="bg-[#FFF5D9]"
      />

      <StatCard
        icon={<FaHandHoldingDollar className="h-6 w-6 text-[#396AFF]" />}
        title="Income"
        value="$5,600"
        iconColor="bg-[#E7EDFF]"
      />

      <StatCard
        icon={<IoReceipt className="h-6 w-6 text-[#FF82AC]" />}
        title="Expense"
        value="$3,460"
        iconColor="bg-[#FFE0EB]"
      />

      <StatCard
        icon={<FaPiggyBank className="h-6 w-6 text-[#16DBCC]" />}
        title="Total Saving"
        value="$7,920"
        iconColor="bg-[#DCFAF8]"
      />
    </div>
  );
};

export default StatCardList;
