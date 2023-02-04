import { IconDeviceMobile, IconMail } from '@tabler/icons-react'
import Container from '../common/Container'
import TopLink from './TopLink'

export default function HeaderTop() {
  return (
    <section className="bg-primary-900 py-1 px-6">
      <Container className="text-header-top text-white justify-end gap-8 uppercase">
        <TopLink href="mailto:contact@goodcore.co.uk" icon={IconMail}>
          contact@goodcore.co.uk
        </TopLink>

        <TopLink href="tel:02087816903" icon={IconDeviceMobile}>
          020 8781 6903
        </TopLink>
      </Container>
    </section>
  )
}
