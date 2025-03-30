"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { day: "Sat", deposit: 500, withdraw: 200 },
  { day: "Sun", deposit: 350, withdraw: 100 },
  { day: "Mon", deposit: 300, withdraw: 250 },
  { day: "Tue", deposit: 450, withdraw: 300 },
  { day: "Wed", deposit: 100, withdraw: 200 },
  { day: "Thu", deposit: 400, withdraw: 250 },
  { day: "Fri", deposit: 450, withdraw: 300 },
];

export default function WeeklyActivity() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex">
        <h2 className="text-xl font-semibold">Weekly Activity</h2>
      </div>

      <Card className="p-4">
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart
              data={data}
              margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: "#A0AEC0", fontSize: 10 }} />
              <YAxis tick={{ fill: "#A0AEC0", fontSize: 10 }} />
              <Tooltip />
              <Legend
                iconType="circle"
                verticalAlign="top"
                align="right"
                wrapperStyle={{ paddingBottom: 30 }}
              />
              <Bar
                dataKey="deposit"
                fill="#00C9A7"
                barSize={10}
                radius={[8, 8, 8, 8]}
              />
              <Bar
                dataKey="withdraw"
                fill="#3B82F6"
                barSize={10}
                radius={[8, 8, 8, 8]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
