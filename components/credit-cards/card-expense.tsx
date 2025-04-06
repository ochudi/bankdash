"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { name: "DBL Bank", value: 25, color: "#4F46E5" },
  { name: "BRC Bank", value: 25, color: "#FB7185" },
  { name: "ABM Bank", value: 25, color: "#5EEAD4" },
  { name: "MCP Bank", value: 25, color: "#FBBF24" },
];

const CardExpenseStats = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <h2 className="text-xl font-semibold">Card Expense Statistics</h2>
      </div>
      <Card className="rounded-2xl shadow-sm">
        <CardContent className="p-6">
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  innerRadius={40}
                  outerRadius={100}
                  paddingAngle={2}
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-y-3 mt-6">
            {data.map((entry, idx) => (
              <div key={idx} className="flex items-center px-9 gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: entry.color }}
                ></span>
                <span className="text-sm text-muted-foreground">
                  {entry.name}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardExpenseStats;
