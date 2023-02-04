import { IconCaretDown } from '@tabler/icons-react'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Services', href: '/services', sublinks: [] },
  { name: 'Technologies', href: '/technologies', sublinks: [] },
  { name: 'Company', href: '/company', sublinks: [] },
  { name: 'Industries', href: '/industries', sublinks: [] },
  { name: 'Case Studies', href: '/cases', sublinks: null },
  { name: 'Blog', href: '/blog', sublinks: null },
]

export default function NavLinks() {
  const pathname = usePathname()

  const navLinks = links.map(link => {
    const classes = classNames(
      { 'border-b-2': pathname === link.href },
      'text-sm flex items-center gap-1 py-5 px-3 border-b-2 border-white uppercase',
      'hover:bg-blue-100 hover:text-blue-400 hover:border-blue-500'
    )

    return (
      <Link key={link.href} href={link.href} className={classes}>
        <span>{link.name}</span>

        {link.sublinks != null && (
          <IconCaretDown color="black" fill="black" size={12} />
        )}
      </Link>
    )
  })

  return <>{navLinks}</>
}
