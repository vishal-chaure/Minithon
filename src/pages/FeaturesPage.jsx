import React from "react";
import { motion } from "framer-motion";
import { PieChart as PieChartIcon, BarChart, Target, Calendar, TrendingUp, ChevronRight } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Assuming you have a Button component
const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded ${className}`} {...props}>{children}</button>
);

// Assuming you have a Progress component
const Progress = ({ value, className, indicatorClassName }) => (
  <div className={`h-2 ${className}`}>
    <div className={`h-full ${indicatorClassName}`} style={{ width: `${value}%` }}></div>
  </div>
);

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
  >
    <Icon className="h-12 w-12 text-blue-400 mb-4" />
    <h3 className="text-xl font-bold mb-2 text-blue-300">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const expenseData = [
  { name: 'Housing', value: 1500 },
  { name: 'Food', value: 500 },
  { name: 'Transportation', value: 300 },
  { name: 'Entertainment', value: 200 },
  { name: 'Utilities', value: 250 },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-300">BudgetBuddy Features</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-blue-300">Powerful Financial Tools at Your Fingertips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={PieChartIcon}
              title="Dynamic Expense Tracking"
              description="Analyze your spending with multi-layered charts and custom filters."
              delay={0.1}
            />
            <FeatureCard
              icon={BarChart}
              title="Budget Management with Predictive Alerts"
              description="Set limits, get real-time predictions, and receive progressive alerts."
              delay={0.2}
            />
            <FeatureCard
              icon={Target}
              title="Interactive Savings Goals"
              description="Track and prioritize multiple savings goals with dynamic visualizations."
              delay={0.3}
            />
            <FeatureCard
              icon={Calendar}
              title="Bill Payment Calendar"
              description="Manage recurring bills with a drag-and-drop calendar and reminders."
              delay={0.4}
            />
            <FeatureCard
              icon={TrendingUp}
              title="Financial Wellness Score"
              description="Get a real-time indicator of your financial health based on your habits."
              delay={0.5}
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-blue-300">Feature Highlights</h2>
          
          <div className="space-y-12">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Budget Management</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Groceries</span>
                    <span className="text-yellow-400">75%</span>
                  </div>
                  <Progress value={75} className="bg-gray-700" indicatorClassName="bg-yellow-400" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Entertainment</span>
                    <span className="text-red-400">90%</span>
                  </div>
                  <Progress value={90} className="bg-gray-700" indicatorClassName="bg-red-400" />
                </div>
              </div>
              <p className="mt-4 text-gray-400">Real-time budget tracking with predictive alerts.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Savings Goals</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Vacation Fund</span>
                    <span className="text-green-400">$2,500 / $5,000</span>
                  </div>
                  <Progress value={50} className="bg-gray-700" indicatorClassName="bg-green-400" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Emergency Fund</span>
                    <span className="text-blue-400">$8,000 / $10,000</span>
                  </div>
                  <Progress value={80} className="bg-gray-700" indicatorClassName="bg-blue-400" />
                </div>
              </div>
              <p className="mt-4 text-gray-400">Track and prioritize multiple savings goals with ease.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Ready to Take Control of Your Finances?</h2>
          <p className="text-gray-400 mb-8">Join thousands of users who are mastering their money with FinDash.</p>
          {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started Now
            <ChevronRight className="ml-2 h-4 w-4 inline" />
          </Button> */}
        </section>
      </main>

      <footer className="bg-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 BudgetBuddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
