'use client'

import { useEffect, useRef, useState } from 'react'

interface CountingStat {
  value: number
  suffix?: string
  label: string
  description?: string
}

interface CountingStatsProps {
  stats: CountingStat[]
  className?: string
  sectionTitle?: string
}

export default function CountingStats({ stats, className = '', sectionTitle }: CountingStatsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          
          // Animate each stat
          stats.forEach((stat, index) => {
            let current = 0
            const target = stat.value
            const increment = target / 60
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = target
                  return newCounts
                })
                clearInterval(timer)
              } else {
                setCounts(prev => {
                  const newCounts = [...prev]
                  newCounts[index] = Math.floor(current)
                  return newCounts
                })
              }
            }, 30)
          })
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
  }, [isVisible, stats])

  const isDark = className.includes('bg-black') || className === ''
  
  return (
    <section ref={sectionRef} className={`py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sectionTitle && (
          <h2 className={`text-4xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-gray-900'}`}>{sectionTitle}</h2>
        )}
        <div className={`grid ${stats.length === 4 ? 'md:grid-cols-4' : stats.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6`}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform transition-all duration-1000"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className={`text-5xl md:text-6xl font-bold mb-2 ${isDark ? 'text-[#5ACBED]' : 'text-[#3ba5c1]'}`}>
                {counts[index].toLocaleString()}{stat.suffix || '+'}
              </div>
              <div className={`text-xl font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>{stat.label}</div>
              {stat.description && (
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

