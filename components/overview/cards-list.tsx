import React from "react";
import { Button } from "@/components/ui/button";
import { CardDisplay } from "@/components/card-display";

const CardsList = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">My Cards</h2>
        <Button variant="ghost" className="text-sm">
          See All
        </Button>
      </div>
      <div className="flex gap-[30px] overflow-x-auto">
        <CardDisplay
          balance="$5,756"
          cardHolder="Eddy Cusuma"
          cardNumber="3778 **** **** 1234"
          validThru="12/22"
          variant="blue"
        />

        <CardDisplay
          balance="$5,756"
          cardHolder="Eddy Cusuma"
          cardNumber="3778 **** **** 1234"
          validThru="12/22"
          variant="white"
          className="hidden md:flex"
        />
      </div>
    </div>
  );
};

export default CardsList;
