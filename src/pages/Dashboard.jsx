"use client";

import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// Sample data structure
const expenseData = {
  "2023": {
    January: {
      Food: 300,
      Transportation: 150,
      Entertainment: 100,
      Utilities: 200,
      "Food.Groceries": 200,
      "Food.Dining Out": 100,
    },
    February: {
      Food: 280,
      Transportation: 160,
      Entertainment: 120,
      Utilities: 190,
      "Food.Groceries": 180,
      "Food.Dining Out": 100,
    },
    // ... other months
  },
  "2024": {
    January: {
      Food: 320,
      Transportation: 140,
      Entertainment: 110,
      Utilities: 210,
      "Food.Groceries": 220,
      "Food.Dining Out": 100,
    },
    February: {
      Food: 290,
      Transportation: 170,
      Entertainment: 130,
      Utilities: 200,
      "Food.Groceries": 190,
      "Food.Dining Out": 100,
    },
    // ... other months
  },
};

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
];

export default function ExpenseTracker() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [drillDownCategory, setDrillDownCategory] = useState(null);

  const years = Object.keys(expenseData);
  const categories = [
    "All",
    ...new Set(
      Object.values(expenseData[selectedYear]).flatMap((month) =>
        Object.keys(month)
      )
    ),
  ];

  const getFilteredData = () => {
    const yearData = expenseData[selectedYear];
    return Object.entries(yearData).map(([month, expenses]) => ({
      month,
      ...expenses,
      total: Object.values(expenses).reduce((sum, value) => sum + value, 0),
    }));
  };

  const getPieChartData = () => {
    const filteredData = getFilteredData();
    const aggregatedData = filteredData.reduce((acc, month) => {
      Object.entries(month).forEach(([category, amount]) => {
        if (category !== "month" && category !== "total") {
          if (selectedCategory === "All" || category.startsWith(selectedCategory)) {
            acc[category] = (acc[category] || 0) + amount;
          }
        }
      });
      return acc;
    }, {});

    return Object.entries(aggregatedData).map(([name, value]) => ({
      name,
      value,
    }));
  };

  const handlePieClick = (data) => {
    if (data.name.includes(".")) {
      // Already drilled down, do nothing
      return;
    }
    const subCategories = Object.keys(expenseData[selectedYear]["January"]).filter((cat) =>
      cat.startsWith(`${data.name}.`)
    );
    if (subCategories.length > 0) {
      setDrillDownCategory(data.name);
    }
  };

  const resetDrillDown = () => {
    setDrillDownCategory(null);
  };

  return (
    <Card className="w-full max-w-4xl shadow-lg rounded-lg p-5 bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-700">
          Dynamic Expense Tracker
        </CardTitle>
        <CardDescription className="text-gray-500">
          Analyze your spending patterns with interactive charts
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {drillDownCategory && (
            <Button
              onClick={resetDrillDown}
              className="bg-red-500 text-white hover:bg-red-600 transition"
            >
              Reset Drill Down
            </Button>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ChartContainer config={{}} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={getPieChartData().filter((item) =>
                    drillDownCategory ? item.name.startsWith(`${drillDownCategory}.`) : !item.name.includes(".")
                  )}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  dataKey="value"
                  onClick={handlePieClick}
                >
                  {getPieChartData().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<ChartTooltip content={<ChartTooltipContent />} />} />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
          <ChartContainer config={{}} className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={getFilteredData()}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip content={<ChartTooltip content={<ChartTooltipContent />} />} />
                <Legend />
                {categories
                  .filter(
                    (cat) =>
                      cat !== "All" &&
                      (selectedCategory === "All" || cat === selectedCategory)
                  )
                  .map((category, index) => (
                    <Bar
                      key={category}
                      dataKey={category}
                      stackId="a"
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
