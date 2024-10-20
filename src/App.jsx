import React from 'react'
import OnboardingPage from './components/OnBoardingpage'
import LandingPage from './pages/LandingPage'
import FeaturesPage from './pages/FeaturesPage'
const App = () => {
  return (
    <div>
      <LandingPage/>
      <OnboardingPage/>
      <FeaturesPage/>
    </div>
  )
}

export default App