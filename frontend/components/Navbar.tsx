'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { SearchResult } from '@/lib/search'

interface DropdownItem {
  href: string
  label: string
  children?: DropdownItem[]
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
    }, 200)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const hasActiveChild = items.some(item => 
    pathname === item.href || 
    pathname.startsWith(item.href + '/') ||
    (item.children && item.children.some(child => 
      pathname === child.href || pathname.startsWith(child.href + '/')
    ))
  )

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 ${
          hasActiveChild
            ? 'text-[#3ba5c1] font-semibold'
            : 'text-gray-800 hover:text-[#3ba5c1] hover:bg-[#3ba5c1]/5'
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
          className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl py-2 z-50 border-2 border-[#3ba5c1]/20 rounded-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {items.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`block px-6 py-3 text-sm transition-all duration-200 ${
                  pathname === item.href || pathname.startsWith(item.href + '/')
                    ? 'bg-[#3ba5c1]/10 text-[#3ba5c1] font-semibold border-l-4 border-[#3ba5c1]'
                    : 'text-gray-800 hover:bg-[#3ba5c1]/5 hover:text-[#3ba5c1]'
                }`}
                prefetch={true}
              >
                <div className="flex items-center justify-between">
                  {item.label}
                  {item.children && (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </div>
              </Link>
              {item.children && (
                <div className="absolute left-full top-0 ml-1 w-56 bg-white shadow-xl py-2 border-2 border-[#3ba5c1]/20 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`block px-6 py-3 text-sm transition-all duration-200 ${
                        pathname === child.href || pathname.startsWith(child.href + '/')
                          ? 'bg-[#3ba5c1]/10 text-[#3ba5c1] font-semibold border-l-4 border-[#3ba5c1]'
                          : 'text-gray-800 hover:bg-[#3ba5c1]/5 hover:text-[#3ba5c1]'
                      }`}
                      prefetch={true}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const pathname = usePathname()
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/')

  // Close search when navigating
  useEffect(() => {
    setSearchOpen(false)
    setSearchQuery('')
    setSearchResults([])
  }, [pathname])

  // Search functionality with debouncing
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current)
    }

    if (searchQuery.trim().length < 2) {
      setSearchResults([])
      setIsSearching(false)
      return
    }

    setIsSearching(true)
    searchTimeoutRef.current = setTimeout(async () => {
      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
        if (response.ok) {
          const results = await response.json()
          setSearchResults(results)
        } else {
          setSearchResults([])
        }
      } catch (error) {
        console.error('Search error:', error)
        setSearchResults([])
      } finally {
        setIsSearching(false)
      }
    }, 300) // 300ms debounce

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current)
      }
    }
  }, [searchQuery])

  // Focus search input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [searchOpen])

  return (
    <nav className="bg-white border-b-2 border-[#3ba5c1] sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" prefetch={true}>
            <Image 
              src="/AFSO-Logo-16-.png" 
              alt="AFSO" 
              width={120} 
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                isActive('/') && pathname === '/'
                  ? 'text-[#3ba5c1] font-semibold bg-[#3ba5c1]/10'
                  : 'text-gray-800 hover:text-[#3ba5c1] hover:bg-[#3ba5c1]/5'
              }`}
              prefetch={true}
            >
              Home
            </Link>
            
            <DropdownMenu
              title="About Us"
              items={[
                { href: '/about/story', label: 'Story' },
                { href: '/about/mission', label: 'Mission' },
                { href: '/about/board', label: 'Board' },
                { href: '/about/administration', label: 'Administration' },
                { href: '/about/partners', label: 'Partners' },
                { href: '/about/annual-reports', label: 'Annual Reports' },
              ]}
            />
            
            <DropdownMenu
              title="Academics"
              items={[
                { href: '/academics/course-schedule', label: 'Course Schedule' },
                { 
                  href: '/academics/faculty', 
                  label: 'Faculty',
                  children: [
                    { href: '/academics/faculty/our-professors', label: 'Our Professors' },
                    { href: '/academics/faculty/technical-assistants', label: 'Technical Assistants' },
                  ],
                },
                { href: '/academics/course-catalog', label: 'Course Catalog' },
                { href: '/academics/university-pathways', label: 'University Pathways' },
                { href: '/academics/bard-ba-partnership', label: 'Bard BA Partnership' },
              ]}
            />
            
            <DropdownMenu
              title="More"
              items={[
                { href: '/more/student-success', label: 'Student Success' },
                { href: '/get-involved', label: 'Get Involved' },
                { href: '/news', label: 'News' },
                { 
                  href: '/contact', 
                  label: 'Contact',
                  children: [
                    { href: '/contact/students-apply', label: 'Students Apply' },
                    { href: '/contact/volunteerism', label: 'Volunteerism' },
                  ],
                },
                { href: '/current-students-professors', label: 'Current Students & Professors' },
              ]}
            />
          </div>

          {/* Search and Donate Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="h-10 px-4 text-sm font-medium text-gray-800 hover:text-white bg-white border-2 border-gray-300 hover:border-[#3ba5c1] hover:bg-[#3ba5c1] rounded-md transition-all duration-200 flex items-center gap-2"
              aria-label="Search"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="hidden sm:inline">Search</span>
            </button>
            <Link
              href="/donate"
              className="h-10 px-4 text-sm font-medium text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] rounded-md transition-all duration-200 flex items-center gap-2"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="hidden sm:inline">Donate</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {searchOpen && (
        <div className="border-t-2 border-[#3ba5c1] bg-white shadow-md relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search announcements, programs, classes, and pages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-10 border-2 border-[#3ba5c1]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3ba5c1] focus:border-[#3ba5c1] transition-all"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSearchResults([])
                    searchInputRef.current?.focus()
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Search Results */}
            {(searchQuery.trim().length >= 2 || searchResults.length > 0) && (
              <div className="mt-4 max-h-96 overflow-y-auto border-t border-gray-200">
                {isSearching ? (
                  <div className="py-8 text-center text-gray-500">
                    <svg className="animate-spin h-6 w-6 mx-auto text-[#3ba5c1]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="mt-2">Searching...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result) => (
                      <Link
                        key={result.id}
                        href={result.href}
                        onClick={() => {
                          setSearchOpen(false)
                          setSearchQuery('')
                        }}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-start gap-3">
                          {result.image && (
                            <img
                              src={result.image}
                              alt={result.title}
                              className="w-12 h-12 object-cover rounded flex-shrink-0"
                            />
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium text-[#3ba5c1] uppercase">
                                {result.type}
                              </span>
                            </div>
                            <h3 className="font-semibold text-gray-900 truncate">{result.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-2 mt-1">{result.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : searchQuery.trim().length >= 2 ? (
                  <div className="py-8 text-center text-gray-500">
                    <p>No results found for "{searchQuery}"</p>
                    <p className="text-sm mt-1">Try different keywords</p>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      )}

    </nav>
  )
}
