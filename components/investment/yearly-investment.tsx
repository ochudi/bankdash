"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "2016", value: 5000 },
  { year: "2017", value: 22000 },
  { year: "2018", value: 15000 },
  { year: "2019", value: 35000 },
  { year: "2020", value: 12000 },
  { year: "2021", value: 25000 },
];

const YearlyTotalInvestment = () => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold">Yearly Total Investment</h2>

      <Card>
        <CardContent className="p-6">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E5E7EB"
              />
              <XAxis
                dataKey="year"
                tick={{ fill: "#718EBF", fontSize: 12 }}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                tick={{ fill: "#718EBF", fontSize: 12 }}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Line
                type="linear"
                dataKey="value"
                stroke="#EAB308"
                strokeWidth={3}
                dot={{ fill: "white", stroke: "#EAB308", strokeWidth: 2, r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default YearlyTotalInvestment;
