import VisualLayer from './components/VisualLayer'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import SectionDots from './components/SectionDots'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import PanelShowcase from './components/PanelShowcase'
import TrustedBy from './components/TrustedBy'
import WhoFor from './components/WhoFor'
import Bot from './components/Bot'
import Economy from './components/Economy'
import HowItWorks from './components/HowItWorks'
import Solutions from './components/Solutions'
import Differentiation from './components/Differentiation'
import Comparison from './components/Comparison'
import LiveCounter from './components/LiveCounter'
import Impact from './components/Impact'
import SpainMap from './components/SpainMap'
import Proof from './components/Proof'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import StickyCta from './components/StickyCta'
import FloatingContacts from './components/FloatingContacts'
import Calculator from './components/Calculator'
import { useReveal } from './hooks/useReveal'
import { useCursor } from './hooks/useCursor'
import { useTilt } from './hooks/useTilt'
import { useMagnetic } from './hooks/useMagnetic'

export default function App() {
  useReveal()
  useCursor()
  useTilt('.tilt')
  useMagnetic('.btn-gold')
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <SectionDots />
      <VisualLayer />
      <Header />
      <main className="relative z-[1]">
        <Hero />
        <Marquee />
        <TrustedBy />
        <PanelShowcase />
        <WhoFor />
        <Bot />
        <Economy />
        <HowItWorks />
        <Solutions />
        <Differentiation />
        <Comparison />
        <LiveCounter />
        <Impact />
        <SpainMap />
        <Proof />
        <Testimonials />
        <Process />
        <Partners />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
      <FloatingContacts />
      <Calculator />
    </>
  )
}
