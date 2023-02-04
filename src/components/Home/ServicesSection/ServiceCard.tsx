import { IconArrowRight } from '@tabler/icons-react'
import classNames from 'classnames'
import Link from 'next/link'

export default function ServiceCard({
  iconName,
  title,
  children,
  href,
  className,
}: {
  iconName: string
  title: string
  children: string
  href: string
  className?: string
}) {
  const classes = classNames(
    'px-2 py-8 flex flex-col gap-6 rounded-xl shadow-md group hover:shadow-primary-500 hover:bg-primary-800 hover:text-white transition',
    className
  )

  return (
    <Link className={classes} href={href}>
      <div className="flex items-center justify-center w-full h-24">
        <div
          className="w-32 h-32 transition-transform duration-300 group-hover:scale-125 bg-primary-500 group-hover:bg-white"
          style={{ mask: `url(/icons/${iconName}.svg) no-repeat center` }}
        />
      </div>

      <div className="p-8 gap-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-base mt-4">{children}</p>
      </div>

      <div className="flex justify-center align-center gap-2 text-primary-500 group-hover:text-white">
        More <IconArrowRight />
      </div>
    </Link>
  )
}
