import React from 'react'
import OnboardingPage from './components/OnBoardingpage'
import LandingPage from './pages/LandingPage'
import FeaturesPage from './pages/FeaturesPage'
import ExpenseTracker from './components/ExpenseTracker'
import './styles/style.css';
const App = () => {
  return (
    <div>
      <LandingPage/>
      <OnboardingPage/>
      <FeaturesPage/>
      <ExpenseTracker />
    </div>
  )
}

export default App