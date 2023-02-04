import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <ServicesSection />
    </main>
  )
}
