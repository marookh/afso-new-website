'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Hero from '@/components/Hero'
import PartnerCard from '@/components/PartnerCard'

export default function PartnersPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [partnerCount, setPartnerCount] = useState(0)
  const [studentCount, setStudentCount] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const partners = [
    {
      name: 'American University of Afghanistan (AUAF)',
      logo: '/assets/AFSO Web Assets/All AFSO photos labeled/Partner logos/Logos for partners/AUAF.jpg',
      description: 'A leading educational institution in Afghanistan, AUAF partners with AFSO to provide pathways for students seeking higher education opportunities.',
    },
    {
      name: 'Asian University for Women (AUW)',
      logo: '/assets/AFSO Web Assets/All AFSO photos labeled/Partner logos/Logos for partners/AUW.jpg',
      description: 'AUW collaborates with AFSO to support Afghan women in accessing quality higher education and building their futures.',
    },
    {
      name: 'Bard College',
      logo: '/assets/AFSO Web Assets/All AFSO photos labeled/Partner logos/Logos for partners/Bard.jpg',
      description: 'Bard College partners with AFSO through the Bard BA Partnership program, offering degree pathways for our students.',
    },
    {
      name: 'Canadian Women for Women in Afghanistan (CW4W)',
      logo: '/assets/AFSO Web Assets/All AFSO photos labeled/Partner logos/Logos for partners/CW4W.jpg',
      description: 'CW4W works alongside AFSO to support educational initiatives and create opportunities for Afghan women.',
    },
    {
      name: 'Open Society University Network (OSUN)',
      logo: '/assets/AFSO Web Assets/All AFSO photos labeled/Partner logos/Logos for partners/OSUN.jpg',
      description: 'OSUN collaborates with AFSO to expand educational access and create global learning opportunities for Afghan students.',
    },
    {
      name: 'University College London (UCL)',
      logo: '/assets/AFSO Web Assets/All AFSO photos labeled/Partner logos/Logos for partners/UCL.jpg',
      description: 'UCL partners with AFSO to provide academic support and pathways for students pursuing higher education.',
    },
    {
      name: 'Wesleyan University',
      logo: '/assets/AFSO Web Assets/All AFSO photos labeled/Partner logos/Logos for partners/Wesleyan.jpg',
      description: 'Wesleyan University collaborates with AFSO to offer educational programs and support for Afghan university women.',
    },
    {
      name: 'Digital Divide',
      logo: '/assets/AFSO Web Assets/All AFSO photos labeled/Partner logos/Logos for partners/DD.jpg',
      description: 'Digital Divide works with AFSO to bridge technology gaps and provide digital resources for our students.',
    },
    {
      name: 'Education for Humanity',
      logo: '/assets/AFSO Web Assets/All AFSO photos labeled/Partner logos/Logos for partners/EdforH.jpg',
      description: 'Education for Humanity partners with AFSO to expand educational opportunities and support student success.',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          
          // Animate partner count
          let current = 0
          const target = partners.length
          const increment = target / 30
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setPartnerCount(target)
              clearInterval(timer)
            } else {
              setPartnerCount(Math.floor(current))
            }
          }, 50)

          // Animate student count
          let studentCurrent = 0
          const studentTarget = 800
          const studentIncrement = studentTarget / 60
          const studentTimer = setInterval(() => {
            studentCurrent += studentIncrement
            if (studentCurrent >= studentTarget) {
              setStudentCount(studentTarget)
              clearInterval(studentTimer)
            } else {
              setStudentCount(Math.floor(studentCurrent))
            }
          }, 30)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible, partners.length])

  return (
    <div>
      {/* Hero Section */}
      <Hero
        image="/assets/AFSO Web Assets/All AFSO photos labeled/Student photos Named/Hasinah photos named copy/Three students with textbook.JPG"
        imageAlt="AFSO Partners"
        headline="Partners & Supporters"
        subheadline="We are grateful for our partners and supporters who help us expand our reach and impact."
      />

      {/* Impact Stats with Animation */}
      <section ref={sectionRef} className="py-16 bg-[#3ba5c1] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Impact Together</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center transform transition-all duration-1000" style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}>
              <div className="text-6xl font-bold mb-2">{partnerCount}+</div>
              <div className="text-xl font-semibold mb-2">Partners</div>
              <div className="text-sm opacity-90">Working together for change</div>
            </div>
            <div className="text-center transform transition-all duration-1000 delay-200" style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}>
              <div className="text-6xl font-bold mb-2">{studentCount.toLocaleString()}+</div>
              <div className="text-xl font-semibold mb-2">Students</div>
              <div className="text-sm opacity-90">Supported through partnerships</div>
            </div>
            <div className="text-center transform transition-all duration-1000 delay-400" style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
            }}>
              <div className="text-6xl font-bold mb-2">50+</div>
              <div className="text-xl font-semibold mb-2">Programs</div>
              <div className="text-sm opacity-90">Collaborative initiatives</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Grid with Animation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Partners</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="transform transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? 'translateY(0) scale(1)' 
                    : `translateY(50px) scale(0.9)`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <PartnerCard
                  name={partner.name}
                  description={partner.description}
                  logo={partner.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Partnership Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-[#3ba5c1] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Educational Access</h3>
              <p className="text-gray-700 text-center">
                Expand educational opportunities and create pathways for students to access quality higher education.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-[#3ba5c1] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Global Network</h3>
              <p className="text-gray-700 text-center">
                Join a network of institutions working together to support Afghan women's education worldwide.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 duration-300">
              <div className="w-16 h-16 bg-[#3ba5c1] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Lasting Impact</h3>
              <p className="text-gray-700 text-center">
                Create meaningful change that extends beyond individual programs to transform communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner Section */}
      <section className="py-20 bg-[#3ba5c1] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Become a Partner</h2>
          <p className="text-xl mb-8 opacity-90">
            Organizations and institutions can partner with us to expand our reach and create lasting positive change. Together, we can make a greater impact.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-[#3ba5c1] bg-white hover:bg-gray-100 transition-colors transform hover:scale-105 duration-300"
          >
            Contact Us to Partner
          </Link>
        </div>
      </section>
    </div>
  )
}

