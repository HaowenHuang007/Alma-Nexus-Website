import VisualLayer from './components/VisualLayer'
import ScrollProgress from './components/ScrollProgress'
import SectionDots from './components/SectionDots'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import PanelShowcase from './components/PanelShowcase'
import WhoFor from './components/WhoFor'
import Bot from './components/Bot'
import Economy from './components/Economy'
import HowItWorks from './components/HowItWorks'
import Solutions from './components/Solutions'
import Differentiation from './components/Differentiation'
import Impact from './components/Impact'
import Proof from './components/Proof'
import Testimonials from './components/Testimonials'
import StickyCta from './components/StickyCta'
import Calculator from './components/Calculator'
import Process from './components/Process'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import { useReveal } from './hooks/useReveal'
import { useCursor } from './hooks/useCursor'

export default function App() {
  useReveal()
  useCursor()
  return (
    <>
      <ScrollProgress />
      <SectionDots />
      <VisualLayer />
      <Header />
      <main className="relative z-[1]">
        <Hero />
        <Marquee />
        <PanelShowcase />
        <WhoFor />
        <Bot />
        <Economy />
        <HowItWorks />
        <Solutions />
        <Differentiation />
        <Impact />
        <Proof />
        <Testimonials />
        <Process />
        <Partners />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
      <Calculator />
    </>
  )
}
