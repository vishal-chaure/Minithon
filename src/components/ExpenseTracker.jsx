import React, { useState } from 'react';
import {
  PieChart, Pie, Cell, BarChart, Bar,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid
} from 'recharts';
import { expenseData } from '../data/expenseData'; 
import ChartContainer from './ChartContainer';
import ChartTooltip from './ChartTooltip';
import Card from './Card';
import { Select, SelectItem, SelectTrigger, SelectValue } from './Select';
import Button from './Button';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

const ExpenseTracker = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [drillDownCategory, setDrillDownCategory] = useState(null);

  const years = Object.keys(expenseData);
  const categories = [
    "All",
    ...new Set(
      Object.values(expenseData[selectedYear]).flatMap(month => Object.keys(month))
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
        if (category !== 'month' && category !== 'total') {
          if (selectedCategory === "All" || category.startsWith(selectedCategory)) {
            acc[category] = (acc[category] || 0) + amount;
          }
        }
      });
      return acc;
    }, {});

    return Object.entries(aggregatedData).map(([name, value]) => ({ name, value }));
  };

  const handlePieClick = (data) => {
    if (data.name.includes('.')) return;
    const subCategories = Object.keys(expenseData[selectedYear]["January"]).filter(cat => 
      cat.startsWith(`${data.name}.`)
    ); 
    if (subCategories.length > 0) setDrillDownCategory(data.name);
  };

  const resetDrillDown = () => {
    setDrillDownCategory(null);
  };

  return (
    <Card className="w-full h-full max-w-full h-[90vh] p-5">
      <h1 className="text-center font-bold text-xl">Dynamic Expense Tracker</h1>
      <h2 className="text-center font-bold text-lg mb-4">Analyze your spending patterns with interactive charts</h2>
      <div className="flex justify-between mb-4">
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          {years.map(year => (
            <SelectItem key={year} value={year}>{year}</SelectItem>
          ))}
        </Select>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          {categories.map(category => (
            <SelectItem key={category} value={category}>{category}</SelectItem>
          ))}
        </Select>
        {drillDownCategory && (
          <Button onClick={resetDrillDown}>Reset Drill Down</Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ChartContainer>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={getPieChartData().filter(item =>
                  drillDownCategory ? item.name.startsWith(`${drillDownCategory}.`) : !item.name.includes('.')
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
              <Tooltip content={<ChartTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
        <ChartContainer>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={getFilteredData()}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip content={<ChartTooltip />} />
              <Legend />
              {categories
                .filter(cat => cat !== "All" && (selectedCategory === "All" || cat === selectedCategory))
                .map((category, index) => (
                  <Bar key={category} dataKey={category} stackId="a" fill={COLORS[index % COLORS.length]} />
                ))}
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </Card>
  );
};

export default ExpenseTracker;
