'use client'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Samples', path: '/samples' },
  { title: 'Contact', path: '/contact' },
]
const Navbar = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    console.log(pathname)
  }, [pathname, searchParams])
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
