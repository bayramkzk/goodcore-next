import BottomHeader from './BottomHeader'
import TopHeader from './TopHeader'

export default function Header() {
  return (
    <header className="flex flex-col">
      <TopHeader />
      <BottomHeader />
    </header>
  )
}
