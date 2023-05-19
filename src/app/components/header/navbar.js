'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Samples', path: '/samples' },
  { title: 'Contact', path: '/contact' },
]
const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className='flex gap-1'>
        {navLinks.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={`p-2 ml-2 hover:text-red-500  ${
                  pathname === item.path ? 'border-b-4 border-b-red-500' : ''
                }`}
                href={item.path}
                aria-label={item.title}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
