import Container from '@/components/common/Container'
import Link from 'next/link'
import ServiceCard from './ServiceCard'

export default function ServicesSection() {
  return (
    <Container className="py-24 px-8 flex-col gap-16">
      <h1 className="text-5xl uppercase text-center w-full font-bold">
        Our{' '}
        <span className="underline decoration-4 decoration-cyan-400">
          Services
        </span>
      </h1>

      <div className="text-center text-2xl">
        GoodCore is a leading bespoke software development company based in
        Croydon, UK. We build robust software for startups and established
        businesses.
        <br />
        Since 2005.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          iconName="web-app-dev"
          title="Web Application Development "
          href="/services/web-app-development"
        >
          Utilising the latest technologies, we build web applications that
          deliver remarkable functionality and user engagement from within a
          browser window.
        </ServiceCard>

        <ServiceCard
          iconName="mobile-app-dev"
          title="Mobile App Development"
          href="/services/mobile-app-dev"
        >
          Stunning mobile apps that work across a variety of devices and engage
          large audiences - designed with security, scalability, and usability
          in mind.
        </ServiceCard>

        <ServiceCard
          iconName="dedicated-dev-team"
          title="Dedicated Development Team"
          href="/services/dedicated-dev-team"
        >
          Scale your delivery capacity with a wide range of technology skills -
          leverage GoodCore’s experience in hiring, motivating and managing top
          tech professionals.
        </ServiceCard>
      </div>

      <Link
        href="/services"
        className="uppercase m-auto border-2 py-4 px-12 rounded-full font-semibold border-primary-500 text-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500 hover:bg-primary-500 hover:text-white"
      >
        View All Services
      </Link>
    </Container>
  )
}
