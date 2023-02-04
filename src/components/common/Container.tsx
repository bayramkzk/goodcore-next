import classNames from 'classnames'

export default function Container({
  children,
  className,
  as,
}: {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}) {
  const Container = as || 'div'
  const classes = classNames(
    'container w-full max-w-container m-auto flex',
    className
  )
  return <Container className={classes}>{children}</Container>
}
