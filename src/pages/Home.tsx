import PageWrapper from '../components/ui/PageWrapper'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import BatteryVisualShowcase from '../components/sections/BatteryVisualShowcase'
import ServicesHighlight from '../components/sections/ServicesHighlight'
import IndustriesSection from '../components/sections/IndustriesSection'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <AboutSection />
      <BatteryVisualShowcase />
      <ServicesHighlight />
      <IndustriesSection />
      <CTASection />
    </PageWrapper>
  )
}
