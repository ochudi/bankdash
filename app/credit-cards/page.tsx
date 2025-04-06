import { Header } from "@/components/header";
import CardsList from "@/components/overview/cards-list";
import CardExpenseStats from "@/components/credit-cards/card-expense";
import CardList from "@/components/credit-cards/card-list";
import NewCardForm from "@/components/credit-cards/new-card";
import CardSetting from "@/components/credit-cards/card-setting";

export default function CreditCardsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Credit–Cards" />

      <div className="flex-1 space-y-8 p-6">
        <div className="flex gap-[30px] overflow-x-auto whitespace-nowrap snap-x snap-mandatory pb-4 justify-between">
          <CardsList />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-1">
            <CardExpenseStats />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <CardList />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <NewCardForm />
          </div>
          <div className="col-span-1">
            <CardSetting />
          </div>
        </div>
      </div>
    </div>
  );
}
