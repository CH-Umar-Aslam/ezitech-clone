import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './components/Header'
import Navbar from './components/Navbar'
import { InternshipSection } from './components/InternshipSection'
import Footer from './components/Footer'
import InvestingYourself from './components/InvestingYourself'
import HowWorks from './components/HowWorks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <HowWorks />
      <InternshipSection />

      <InvestingYourself />
      <Footer />
    </>
  )
}

export default App
