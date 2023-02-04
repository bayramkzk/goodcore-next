import Link from 'next/link'

export default function ContactButton() {
  return (
    <Link
      className="rounded-3xl bg-primary-500 border-primary-500 text-white py-3 px-4 uppercase text-xs hover:bg-white hover:text-primary-500 border border-b-2 inline h-fit"
      href="/contact"
    >
      Get in touch
    </Link>
  )
}
