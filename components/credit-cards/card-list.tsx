import LongCard from "@/components/long-card";
import { CiCreditCard1 } from "react-icons/ci";

const cardsData = [
  {
    icon: <CiCreditCard1 className="h-5 w-5" />,
    cardType: "Secondary",
    bankName: "DBL Bank",
    cardNumber: "**** **** **** 9277",
    name: "John Doe",
    color: "text-rose-600 bg-rose-100",
  },
  {
    icon: <CiCreditCard1 className="h-5 w-5" />,
    cardType: "Secondary",
    bankName: "BRC Bank",
    cardNumber: "**** **** **** 2210",
    name: "David Smith",
    color: "text-blue-600 bg-blue-100",
  },
  {
    icon: <CiCreditCard1 className="h-5 w-5" />,
    cardType: "Secondary",
    bankName: "ABM Bank",
    cardNumber: "**** **** **** 5678",
    name: "Jane Doe",
    color: "text-amber-600 bg-amber-100",
  },
  {
    icon: <CiCreditCard1 className="h-5 w-5" />,
    cardType: "Secondary",
    bankName: "XYZ Bank",
    cardNumber: "**** **** **** 1234",
    name: "Chris Evans",
    color: "text-green-600 bg-green-100",
  },
];

const CardList = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold">Card List</h2>
      <div className="flex flex-col gap-3">
        {cardsData.map((longCard, i) => (
          <LongCard key={i} longCard={longCard} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
