import classNames from 'classnames'

export default function Highlight({
  image,
  title,
  description,
  className,
}: {
  image: React.ReactNode
  title?: string
  description?: string
  className?: string
}) {
  const classes = classNames(
    'flex w-full h-full justify-center items-center gap-8 p-4 border-slate-300 border-b-2 xl:border-b-0',
    className
  )

  return (
    <div className={classes}>
      {image}

      {(title || description) && (
        <div className="flex flex-col w-fit max-w-[200px]">
          {title && <span className="font-bold text-3xl">{title}</span>}
          {description && <span className="text-slate-600">{description}</span>}
        </div>
      )}
    </div>
  )
}
