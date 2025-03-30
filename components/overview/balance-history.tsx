import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const BalanceHistory = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <h2 className="text-xl font-semibold">Balance History</h2>
      </div>
      <Card>
        <CardContent>
          <div className="h-[200px] w-full relative">
            {/* Simplified area chart */}
            <svg viewBox="0 0 1000 200" className="w-full h-full">
              <path
                d="M0,150 C100,120 200,180 300,120 C400,60 500,180 600,90 C700,30 800,90 900,60 L900,200 L0,200 Z"
                fill="rgba(37, 99, 235, 0.2)"
                stroke="rgb(37, 99, 235)"
                strokeWidth="2"
              />
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-muted-foreground px-4">
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
              <span>Jan</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BalanceHistory;
