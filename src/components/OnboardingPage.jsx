import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"

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
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Welcome to Your Financial Dashboard</h2>
            <p className="mb-4 text-gray-400">We'll guide you through setting up your account and show you the key features.</p>
            <Button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={nextStep}>Get Started</Button>
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <Label htmlFor="startingBalance" className="text-gray-100">Starting Balance</Label>
            <Input
              id="startingBalance"
              name="startingBalance"
              type="number"
              placeholder="Enter your current balance"
              value={financialInfo.startingBalance}
              onChange={handleInputChange}
              className="bg-gray-800 text-gray-100"
            />
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <Label htmlFor="monthlyIncome" className="text-gray-100">Monthly Income</Label>
            <Input
              id="monthlyIncome"
              name="monthlyIncome"
              type="number"
              placeholder="Enter your monthly income"
              value={financialInfo.monthlyIncome}
              onChange={handleInputChange}
              className="bg-gray-800 text-gray-100"
            />
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <Label htmlFor="recurringExpenses" className="text-gray-100">Recurring Expenses</Label>
            <Input
              id="recurringExpenses"
              name="recurringExpenses"
              type="number"
              placeholder="Enter your monthly expenses"
              value={financialInfo.recurringExpenses}
              onChange={handleInputChange}
              className="bg-gray-800 text-gray-100"
            />
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <Label htmlFor="savingsGoal" className="text-gray-100">Savings Goal</Label>
            <Input
              id="savingsGoal"
              name="savingsGoal"
              type="number"
              placeholder="Enter your savings goal"
              value={financialInfo.savingsGoal}
              onChange={handleInputChange}
              className="bg-gray-800 text-gray-100"
            />
          </div>
        )
      case 5:
        return (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">Dashboard Features</h2>
            <p className="text-gray-400">Quick look at the key features of your financial dashboard.</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${index <= currentStep ? 'bg-blue-500' : 'bg-gray-700'}`}
              />
            ))}
          </div>
          <h1 className="text-xl font-semibold text-gray-100">{steps[currentStep].title}</h1>
          <p className="text-gray-400">{steps[currentStep].description}</p>
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
            className="px-4 py-2 border rounded-md text-gray-400 hover:bg-gray-800"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {currentStep === steps.length - 1 ? 'Finish' : 'Next'} <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
