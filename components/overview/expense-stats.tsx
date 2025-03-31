"use client";

import {
  PieChart,
  Pie,
  Cell,
  LabelList,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const chartData = [
  { name: "Entertainment", value: 300, fill: "#343C6A" },
  { name: "Investment", value: 230, fill: "#FA00FF" },
  { name: "Bill Expense", value: 180, fill: "#FC7900" },
  { name: "Others", value: 70, fill: "#1814F3" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background text-foreground shadow-md rounded-lg px-3 py-2 text-sm border border-border">
        <p className="font-semibold">{payload[0].name}</p>
        <p className="text-muted-foreground">{`$${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export default function ExpenseStats() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <h2 className="text-xl font-semibold">Expense Statistics</h2>
      </div>
      <Card className="p-4 min-w-[330px]">
        <CardContent className="flex flex-col items-center">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                outerRadius={125}
                dataKey="value"
              >
                <LabelList
                  dataKey="name"
                  position="inside"
                  className="fill-background"
                  fill="#fff"
                  fontSize={12}
                />
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
