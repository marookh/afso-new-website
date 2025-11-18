'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface HeroProps {
  image?: string
  video?: string
  imageAlt?: string
  headline: string
  subheadline?: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  overlay?: boolean
}

export default function Hero({
  image,
  video,
  imageAlt = 'Hero image',
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  overlay = true,
}: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error)
      })
    }
  }, [video])

  useEffect(() => {
    if (!subheadline) return

    setDisplayedText('')
    setIsTyping(true)
    let currentIndex = 0

    const typingInterval = setInterval(() => {
      if (currentIndex < subheadline.length) {
        setDisplayedText(subheadline.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 30) // Adjust speed here (lower = faster)

    return () => clearInterval(typingInterval)
  }, [subheadline])

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Video or Image */}
      {video ? (
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '100%', minWidth: '100%' }}
            key={video}
          >
            <source src={video} type="video/mp4" />
            {image && (
              <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
            )}
          </video>
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          )}
        </div>
      ) : image ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
          {overlay && (
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          )}
        </div>
      ) : null}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#3ba5c1] mb-6 leading-tight drop-shadow-lg">
              {headline}
            </h1>
            {subheadline && (
              <p className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-md">
                {displayedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
            )}
            {(primaryCTA || secondaryCTA) && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {primaryCTA && (
                  <Link
                    href={primaryCTA.href}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors rounded-sm"
                  >
                    {primaryCTA.text}
                  </Link>
                )}
                {secondaryCTA && (
                  <Link
                    href={secondaryCTA.href}
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border-2 border-white hover:bg-white/10 transition-colors rounded-sm"
                  >
                    {secondaryCTA.text}
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

