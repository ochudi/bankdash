import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const stockData = [
  { id: "01", name: "Trivago", price: "$520", return: "+5%" },
  { id: "02", name: "Canon", price: "$480", return: "+10%" },
  { id: "03", name: "Uber Food", price: "$350", return: "-3%" },
  { id: "04", name: "Nokia", price: "$940", return: "+2%" },
  { id: "05", name: "Tiktok", price: "$670", return: "-12%" },
];

const TrendingStock = () => {
  return (
    <div className="flex flex-col gap-4 col-span-1">
      <h2 className="text-xl font-semibold">Trending Stock</h2>

      <Card className="min-w-[380px] md:m-0 rounded-xl shadow-sm">
        <CardContent className="px-auto py-2">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-200">
                <TableHead className="text-muted-foreground px-2 py-3">
                  SL No
                </TableHead>
                <TableHead className="text-muted-foreground px-2 py-3">
                  Name
                </TableHead>
                <TableHead className="text-muted-foreground px-2 py-3">
                  Price
                </TableHead>
                <TableHead className="text-muted-foreground px-2 py-3">
                  Return
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stockData.map((stock) => (
                <TableRow key={stock.id} className="border-none">
                  <TableCell className="px-2 py-4">{stock.id}.</TableCell>
                  <TableCell className="px-2 py-4">{stock.name}</TableCell>
                  <TableCell className="px-2 py-4">{stock.price}</TableCell>
                  <TableCell
                    className={`px-2 py-4 font-medium ${
                      stock.return.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {stock.return}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendingStock;
