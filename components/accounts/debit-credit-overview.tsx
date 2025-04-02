"use client";

import { Bar, BarChart, CartesianGrid, Legend, XAxis, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const debitCreditData = [
  { day: "Sat", Debit: 1400, Credit: 2300 },
  { day: "Sun", Debit: 900, Credit: 1900 },
  { day: "Mon", Debit: 800, Credit: 1500 },
  { day: "Tue", Debit: 2200, Credit: 1100 },
  { day: "Wed", Debit: 1700, Credit: 2400 },
  { day: "Thu", Debit: 1800, Credit: 800 },
  { day: "Fri", Debit: 2000, Credit: 2600 },
];

const chartConfig = {
  Debit: {
    label: "Debit",
    color: "#1A16F3",
  },
  Credit: {
    label: "Credit",
    color: "#FCAA0B",
  },
} satisfies ChartConfig;

const totalDebited = debitCreditData.reduce((sum, item) => sum + item.Debit, 0);
const totalCredited = debitCreditData.reduce((sum, item) => sum + item.Credit, 0);

export function DebitCreditOverview() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Weekly Activity</h2>
        <div className="hidden sm:flex items-center gap-4 text-sm">
          <span className="font-medium text-[#333B69]">
            ${totalDebited.toLocaleString()} <span className="text-[#718EBF]">Debited</span>
          </span>
          <span className="text-[#333B69]">&</span>
          <span className="font-medium text-[#333B69]">
            ${totalCredited.toLocaleString()} <span className="text-[#718EBF]">Credited this Week</span>
          </span>
        </div>
      </div>
      <Card>
        <CardContent className="w-full">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={debitCreditData}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey="day" tickLine={false} tickMargin={10} axisLine={false} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                <Legend iconType="circle" verticalAlign="top" align="right" wrapperStyle={{ paddingTop: 30, paddingBottom: 30 }} />
                <Bar dataKey="Debit" fill="#1A16F3" radius={6} />
                <Bar dataKey="Credit" fill="#FCAA0B" radius={6} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter className="sm:hidden flex items-center justify-center gap-2 text-sm">
          <span className="font-medium text-[#333B69]">
            ${totalDebited.toLocaleString()} <span className="text-[#718EBF]">Debited</span>
          </span>
          <span className="font-medium text-[#333B69]">
            ${totalCredited.toLocaleString()} <span className="text-[#718EBF]">Credited this Week</span>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DebitCreditOverview;
