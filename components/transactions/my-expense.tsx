"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const data = [
  { name: "Aug", value: 5000 },
  { name: "Sep", value: 12000 },
  { name: "Oct", value: 8000 },
  { name: "Nov", value: 4000 },
  { name: "Dec", value: 12500 },
  { name: "Jan", value: 6000 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-md shadow-md">
        <span className="text-sm font-semibold">
          ${payload[0].value.toLocaleString()}
        </span>
      </div>
    );
  }
  return null;
};

const MyExpense = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <h2 className="text-xl font-semibold">My Expenses</h2>
      </div>
      <Card className="p-4 rounded-2xl lg:w-[300px]">
        <CardContent>
          <div className="h-[180px] w-full lg:w-[231px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#94A3B8", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "rgba(24, 20, 243, 0.1)" }}
                />
                <Bar dataKey="value" fill="#4FD1C5" radius={[6, 6, 6, 6]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyExpense;
