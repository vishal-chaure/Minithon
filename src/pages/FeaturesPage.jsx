import React from "react";
import { motion } from "framer-motion";
import { PieChart, BarChart, Target, Calendar, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

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

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-300">FinDash Features</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-blue-300">Powerful Financial Tools at Your Fingertips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={PieChart}
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
              <h3 className="text-xl font-bold mb-4 text-blue-300">Expense Tracking Visualization</h3>
              <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Interactive chart placeholder</p>
              </div>
              <p className="mt-4 text-gray-400">Drill down into your expenses with interactive charts and custom filters.</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Budget Management</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Groceries</span>
                    <span className="text-yellow-400">75%</span>
                  </div>
                  <Progress value={75} className="h-2 bg-gray-700" indicatorClassName="bg-yellow-400" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Entertainment</span>
                    <span className="text-red-400">90%</span>
                  </div>
                  <Progress value={90} className="h-2 bg-gray-700" indicatorClassName="bg-red-400" />
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
                  <Progress value={50} className="h-2 bg-gray-700" indicatorClassName="bg-green-400" />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Emergency Fund</span>
                    <span className="text-blue-400">$8,000 / $10,000</span>
                  </div>
                  <Progress value={80} className="h-2 bg-gray-700" indicatorClassName="bg-blue-400" />
                </div>
              </div>
              <p className="mt-4 text-gray-400">Track and prioritize multiple savings goals with ease.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">Ready to Take Control of Your Finances?</h2>
          <p className="text-gray-400 mb-8">Join thousands of users who are mastering their money with FinDash.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started Now
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 FinDash. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}