import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft, DollarSign, PiggyBank, BarChart2, Target } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip"

const steps = [
  { title: 'Welcome', description: "Let's set up your financial dashboard" },
  { title: 'Starting Balance', description: 'Enter your current account balance' },
  { title: 'Monthly Income', description: 'How much do you earn each month?' },
  { title: 'Recurring Expenses', description: 'What are your regular monthly expenses?' },
  { title: 'Savings Goal', description: "Let's set a savings target" },
  { title: 'Dashboard Tour', description: 'Quick look at key features' },
]

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [financialInfo, setFinancialInfo] = useState({
    startingBalance: '',
    monthlyIncome: '',
    recurringExpenses: '',
    savingsGoal: '',
  })

  const handleInputChange = (e) => {
    setFinancialInfo({ ...financialInfo, [e.target.name]: e.target.value })
  }

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome to Your Financial Dashboard</h2>
            <p className="mb-4">We'll guide you through setting up your account and show you the key features.</p>
            <Button onClick={nextStep}>Get Started</Button>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <Label htmlFor="startingBalance">Starting Balance</Label>
            <Input
              id="startingBalance"
              name="startingBalance"
              type="number"
              placeholder="Enter your current balance"
              value={financialInfo.startingBalance}
              onChange={handleInputChange}
            />
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <Label htmlFor="monthlyIncome">Monthly Income</Label>
            <Input
              id="monthlyIncome"
              name="monthlyIncome"
              type="number"
              placeholder="Enter your monthly income"
              value={financialInfo.monthlyIncome}
              onChange={handleInputChange}
            />
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <Label htmlFor="recurringExpenses">Recurring Expenses</Label>
            <Input
              id="recurringExpenses"
              name="recurringExpenses"
              type="number"
              placeholder="Enter your monthly expenses"
              value={financialInfo.recurringExpenses}
              onChange={handleInputChange}
            />
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <Label htmlFor="savingsGoal">Savings Goal</Label>
            <Input
              id="savingsGoal"
              name="savingsGoal"
              type="number"
              placeholder="Enter your savings goal"
              value={financialInfo.savingsGoal}
              onChange={handleInputChange}
            />
          </div>
        )
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">Dashboard Features</h2>
            <TooltipProvider>
              <div className="grid grid-cols-2 gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-4 border rounded-lg flex items-center space-x-2 cursor-pointer">
                      <BarChart2 className="h-6 w-6" />
                      <span>Budget Overview</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View and manage your budget categories</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-4 border rounded-lg flex items-center space-x-2 cursor-pointer">
                      <PiggyBank className="h-6 w-6" />
                      <span>Savings Tracker</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Track your progress towards savings goals</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-4 border rounded-lg flex items-center space-x-2 cursor-pointer">
                      <Target className="h-6 w-6" />
                      <span>Financial Score</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>See your overall financial health score</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-4 border rounded-lg flex items-center space-x-2 cursor-pointer">
                      <DollarSign className="h-6 w-6" />
                      <span>Expense Analyzer</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Analyze your spending patterns</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full"
      >
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${
                  index <= currentStep ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <h1 className="text-xl font-semibold">{steps[currentStep].title}</h1>
          <p className="text-gray-600">{steps[currentStep].description}</p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderStepContent(currentStep)}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-between">
          <Button
            onClick={prevStep}
            disabled={currentStep === 0}
            variant="outline"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
          >
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'} <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}