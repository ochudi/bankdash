import { Header } from "@/components/header";
import CardsList from "@/components/overview/cards-list";
import StatCardList from "@/components/accounts/stat-cards";
import InvoicesSent from "@/components/accounts/invoices-sent";
import LastTransaction from "@/components/accounts/last-transaction";
import DebitCreditOverview from "@/components/accounts/debit-credit-overview";

export default function AccountsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="Accounts" />
      <div className="flex-1 space-y-8 p-6">
        <StatCardList />
      </div>

      <div className="flex-1 space-y-8 p-6 md:mx-5">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="col-span-1 xl:col-span-2">
            <LastTransaction />
          </div>
          <div className="col-span-1">
            <CardsList />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="col-span-1 xl:col-span-2">
            <DebitCreditOverview />
          </div>
          <div className="col-span-1">
            <InvoicesSent />
          </div>
        </div>
      </div>
    </div>
  );
}
