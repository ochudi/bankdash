"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jul", value: 150 },
  { name: "Aug", value: 250 },
  { name: "Sep", value: 400 },
  { name: "Oct", value: 800 },
  { name: "Nov", value: 300 },
  { name: "Dec", value: 600 },
  { name: "Jan", value: 700 },
];

const BalanceHistory = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Balance History</h2>
      <Card className="rounded-2xl p-4">
        <CardContent className="w-full h-[255px] sm:h-[255px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height={248}>
            <AreaChart data={data} margin={{ top: 40, right: 20, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1814F3" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#1814F3" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis dataKey="name" tick={{ fill: "#718EBF" }} tickLine={false} axisLine={false} />
              <YAxis 
                tick={{ fill: "#718EBF" }} 
                tickLine={false} 
                axisLine={false} 
                domain={[0, (dataMax: number) => Math.ceil(dataMax * 1.2)]} // Prevents peak cutoff
              />
              <Tooltip 
                cursor={{ fill: "#F3F4F6" }} 
                contentStyle={{ borderRadius: "8px", backgroundColor: "white", border: "none" }} 
                itemStyle={{ color: "#1814F3" }} 
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#1814F3"
                strokeWidth={4}
                fill="url(#colorFill)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default BalanceHistory;
