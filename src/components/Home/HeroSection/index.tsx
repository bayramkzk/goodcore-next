import Container from '@/components/common/Container'
import Image from 'next/image'
import Link from 'next/link'
import EmbedVideo from './EmbedVideo'
import Highlight from './Highlight'

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: 'url(/bg/home-lines.webp)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundColor: '#ebeef6',
      }}
      className="px-8"
    >
      <Container className="py-20 flex flex-col gap-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-16">
          <div className="flex flex-col gap-4">
            <div className="text-6xl leading-[1.1] font-semibold uppercase">
              Bespoke Software Development Company
            </div>

            <div className="text-2xl text-slate-600">
              Software development that is
              <br />
              Good to the Core!
            </div>
          </div>

          <EmbedVideo />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:divide-x-2 divide-slate-300 gap-4">
          <Highlight
            image={
              <Image
                src="/icons/yrs-of-exp.webp"
                alt="experience logo"
                width={40}
                height={36}
              />
            }
            title="17+"
            description="Years of Industry Experience"
          />

          <Highlight
            image={
              <Image
                src="/icons/project-delivered.webp"
                alt="project delivered logo"
                width={40}
                height={36}
              />
            }
            title="110+"
            description="Successful Software Projects"
          />

          <Highlight
            image={
              <Image
                src="/icons/location-based.webp"
                alt="location based logo"
                width={40}
                height={36}
              />
            }
            description="UK-based with Offshore Development Centres"
          />

          <Highlight
            image={
              <Link href="https://clutch.co/profile/goodcore-software?utm_source=widget&utm_medium=2&utm_campaign=widget&utm_content=logo#summary">
                <Image
                  src="/icons/clutch-review.webp"
                  alt="Reviewed on Clutch.co"
                  width={182}
                  height={40}
                />
              </Link>
            }
          />
        </div>
      </Container>
    </section>
  )
}
