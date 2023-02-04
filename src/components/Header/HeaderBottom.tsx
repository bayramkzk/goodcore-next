import { IconMenu2 } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../common/Container'
import ContactButton from './ContactButton'
import NavLinks from './NavLinks'

export default function HeaderBottom() {
  return (
    <section className="bg-white text-black px-6">
      <Container className="justify-between items-center">
        <Link href="/" className="py-3">
          <Image src="/logo.webp" alt="Brand Logo" width={240} height={36} />
        </Link>

        <div className="xl:flex hidden items-center">
          <NavLinks />
          <ContactButton />
        </div>

        <div className="xl:hidden flex items-center gap-1">
          <IconMenu2 />
        </div>
      </Container>
    </section>
  )
}
