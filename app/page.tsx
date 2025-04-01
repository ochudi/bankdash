import { Header } from "@/components/header";
import RecentTransactions from "@/components/overview/recent-transactions";
import CardsList from "@/components/overview/cards-list";
import WeeklyActivity from "@/components/overview/weekly-activity";
import ExpenseStats from "@/components/overview/expense-stats";
import QuickTransfer from "@/components/overview/quick-transfer";
import BalanceHistory from "@/components/overview/balance-history";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Overview" />

      <div className="flex-1 space-y-8 p-6 md:mx-5">
        <div className="flex justify-between flex-col lg:flex-row gap-6">
          <div className="flex gap-[30px] overflow-x-auto whitespace-nowrap snap-x snap-mandatory pb-4 justify-between">
            <CardsList />
          </div>
          <div>
            <RecentTransactions />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="col-span-1 xl:col-span-2">
            <WeeklyActivity />
          </div>
          <div className="col-span-1">
            <ExpenseStats />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="col-span-1">
            <QuickTransfer />
          </div>
          <div className="col-span-1 xl:col-span-2">
            <BalanceHistory />
          </div>
        </div>
      </div>
    </div>
  );
}
