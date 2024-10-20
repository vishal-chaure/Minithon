import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, DollarSign, PieChart, Bell, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-gray-800/50 backdrop-blur-md sticky top-0 z-50">
        <a href="#" className="flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <DollarSign className="h-8 w-8 text-blue-400" />
          </motion.div>
          <span className="ml-2 text-xl font-bold text-blue-300">BudgetBuddy</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Pricing
          </a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  Supercharge Your Finances
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  The ultimate finance dashboard for millennials. Track, budget, and achieve your money goals like a pro.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Login
                  {/* <ChevronRight className="ml-2 h-4 w-4" /> */}
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-950">
                  Register
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 opacity-20 z-0"></div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-300">
              Unlock Your Financial Potential
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: PieChart, title: "Smart Expense Tracking", description: "Effortlessly categorize and visualize your spending habits." },
                { icon: Bell, title: "Intelligent Budget Alerts", description: "Stay on top of your finances with timely, personalized notifications." },
                { icon: Target, title: "Goal-Driven Savings", description: "Set, track, and crush your savings goals with powerful tools." }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <feature.icon className="h-12 w-12 mb-4 text-blue-400" />
                  <h3 className="text-xl font-bold mb-2 text-blue-300">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-gray-400">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2024 BudgetBuddy Inc. All rights reserved.
          </p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <a className="text-sm hover:text-blue-400 transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-sm hover:text-blue-400 transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-sm hover:text-blue-400 transition-colors" href="#">
              FAQ
            </a>
          </nav>
        </div>
      </footer>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <Button size="lg" className="rounded-full w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white shadow-lg">
          <ArrowRight className="h-6 w-6" />
        </Button>
      </motion.div>
    </div>
  );
}