import { IconDeviceMobile, IconMail } from '@tabler/icons-react'
import Link from 'next/link'

export default function TopHeader() {
  return (
    <section className="bg-primary-900 py-1 px-6">
      <div className="brand-container text-header-top text-white justify-end gap-8 uppercase">
        <Link href="mailto:contact@goodcore.co.uk" className="header-top-link">
          <IconMail size={16} />
          <span>contact@goodcore.co.uk</span>
        </Link>

        <Link href="tel:02087816903" className="header-top-link">
          <IconDeviceMobile size={16} />
          <span>020 8781 6903</span>
        </Link>
      </div>
    </section>
  )
}
