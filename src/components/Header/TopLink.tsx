import { TablerIconsProps } from '@tabler/icons-react'
import classNames from 'classnames'
import Link from 'next/link'

export default function TopLink({
  icon: Icon,
  href,
  className,
  children,
}: {
  icon: (props: TablerIconsProps) => JSX.Element
  href: string
  className?: string
  children: React.ReactNode
}) {
  const classes = classNames(
    'flex gap-1 hover:underline items-center',
    className
  )

  return (
    <Link href={href} className={classes}>
      <Icon size={16} />
      <span>{children}</span>
    </Link>
  )
}
