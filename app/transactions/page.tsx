import { Header } from "@/components/header";
import CardsList from "@/components/overview/cards-list";
import MyExpense from "@/components/transactions/my-expense";
import RecentTransactionsTable from "@/components/transactions/recent-transactions";

export default function TransactionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Overview" />

      <div className="flex-1 space-y-8 p-6 md:mx-5">
        <div className="flex justify-between flex-col lg:flex-row gap-6">
          <div className="flex gap-[30px] overflow-x-auto whitespace-nowrap snap-x snap-mandatory pb-4 justify-between">
            <CardsList />
          </div>
          <div>
            <MyExpense />
          </div>
        </div>
        <div className="flex">
          <RecentTransactionsTable />
        </div>
      </div>
    </div>
  );
}
