import VisualLayer from './components/VisualLayer'
import BackgroundDecor from './components/BackgroundDecor'
import HeatWaves from './components/HeatWaves'
import Preloader from './components/Preloader'
import ScrollProgress from './components/ScrollProgress'
import SectionDots from './components/SectionDots'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import PanelShowcase from './components/PanelShowcase'
import TrustedBy from './components/TrustedBy'
import Recognitions from './components/Recognitions'
import Divider from './components/Divider'
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
import PartnerModal from './components/PartnerModal'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <SectionDots />
      <BackgroundDecor />
      <HeatWaves />
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
        <Divider />
        <Differentiation />
        <Comparison />
        <LiveCounter />
        <Impact />
        <SpainMap />
        <Divider />
        <Proof />
        <Testimonials />
        <Process />
        <Partners />
        <Recognitions />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
      <FloatingContacts />
      <Calculator />
      <PartnerModal />
    </>
  )
}
