import { IconMenu2 } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import NavLinks from './NavLinks'

export default function BottomHeader() {
  return (
    <section className="bg-white text-black px-6">
      <div className="brand-container justify-between items-center">
        <Link href="/" className="py-3">
          <Image src="/logo.webp" alt="Brand Logo" width={240} height={36} />
        </Link>

        <div className="header-nav-links">
          <NavLinks />

          <Link className="header-nav-contact-button" href="">
            Get in touch
          </Link>
        </div>

        <div className="header-nav-burger">
          <IconMenu2 />
        </div>
      </div>
    </section>
  )
}
