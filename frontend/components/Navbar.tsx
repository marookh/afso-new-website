'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

interface DropdownItem {
  href: string
  label: string
}

interface DropdownMenuProps {
  title: string
  items: DropdownItem[]
}

function DropdownMenu({ title, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
    }, 200) // Small delay to allow moving to dropdown
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
          items.some(item => pathname === item.href || pathname.startsWith(item.href + '/'))
            ? '[color:#135f5c] border-b-2 border-[#135f5c]'
            : 'text-gray-700 hover:[color:#135f5c]'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <svg
          className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div 
          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 text-sm transition-colors ${
                pathname === item.href || pathname.startsWith(item.href + '/')
                  ? 'bg-[#135f5c]/10 [color:#135f5c] font-medium'
                  : 'text-gray-700 hover:bg-gray-50 hover:[color:#135f5c]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/AFSO-Logo-16-.png" 
              alt="AFSO Logo" 
              width={50} 
              height={50}
              className="h-12 w-12 object-contain"
              priority
            />
            <span className="text-2xl font-bold" style={{ color: '#135f5c' }}>AFSO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/')
                  ? '[color:#135f5c] border-b-2 border-[#135f5c]'
                  : 'text-gray-700 hover:[color:#135f5c]'
              }`}
            >
              Home
            </Link>
            
            <DropdownMenu
              title="About"
              items={[
                { href: '/about', label: 'Our Mission' },
                { href: '/about/professors', label: 'Professors' },
                { href: '/about/history', label: 'History' },
                { href: '/about/impact', label: 'Our Impact' },
              ]}
            />
            
            <DropdownMenu
              title="Academics"
              items={[
                { href: '/academics/apply', label: 'Apply' },
                { href: '/academics/classes', label: 'Classes' },
              ]}
            />
            
            <Link
              href="/donate"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/donate')
                  ? '[color:#135f5c] border-b-2 border-[#135f5c]'
                  : 'text-gray-700 hover:[color:#135f5c]'
              }`}
            >
              Donate
            </Link>
            
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium transition-colors ${
                isActive('/contact')
                  ? '[color:#135f5c] border-b-2 border-[#135f5c]'
                  : 'text-gray-700 hover:[color:#135f5c]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:[color:#135f5c] hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:[color:#135f5c]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:[color:#135f5c]"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/academics/classes"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:[color:#135f5c]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Academics
            </Link>
            <Link
              href="/donate"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:[color:#135f5c]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Donate
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:[color:#135f5c]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

