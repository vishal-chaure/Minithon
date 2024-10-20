import React from 'react'
import About from './pages/AboutUs'
import OnboardingPage from './components/OnBoardingpage'
import LandingPage from './pages/LandingPage'
import FeaturesPage from './pages/FeaturesPage'
import AboutUs from './pages/AboutUs'
const App = () => {
  return (
    <div>
      <LandingPage/>
      <OnboardingPage/>
      <FeaturesPage/>
      <AboutUs/>
    </div>
  )
}

export default App