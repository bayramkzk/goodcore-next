import HeaderBottom from './HeaderBottom'
import HeaderTop from './HeaderTop'

export default function Header() {
  return (
    <header className="flex flex-col shadow sticky top-0">
      <HeaderTop />
      <HeaderBottom />
    </header>
  )
}
