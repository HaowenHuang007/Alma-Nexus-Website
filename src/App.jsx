import VisualLayer from './components/VisualLayer'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import WhoFor from './components/WhoFor'
import Bot from './components/Bot'
import Economy from './components/Economy'
import HowItWorks from './components/HowItWorks'
import Solutions from './components/Solutions'
import Differentiation from './components/Differentiation'
import Proof from './components/Proof'
import Process from './components/Process'
import Partners from './components/Partners'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'
import { useCursor } from './hooks/useCursor'

export default function App() {
  useReveal()
  useCursor()
  return (
    <>
      <VisualLayer />
      <Header />
      <main className="relative z-[1]">
        <Hero />
        <Marquee />
        <WhoFor />
        <Bot />
        <Economy />
        <HowItWorks />
        <Solutions />
        <Differentiation />
        <Proof />
        <Process />
        <Partners />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
