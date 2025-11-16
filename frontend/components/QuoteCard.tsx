import Image from 'next/image'

interface QuoteCardProps {
  image: string
  imageAlt: string
  quote: string
  attribution: string
  className?: string
}

export default function QuoteCard({
  image,
  imageAlt,
  quote,
  attribution,
  className = '',
}: QuoteCardProps) {
  return (
    <div className={`grid md:grid-cols-2 bg-white ${className}`}>
      <div className="relative h-64 md:h-full min-h-[300px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="p-8 md:p-12 flex flex-col justify-center">
        <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-6 leading-relaxed">
          "{quote}"
        </blockquote>
        <cite className="text-lg text-gray-700 not-italic font-medium">
          -- {attribution}
        </cite>
      </div>
    </div>
  )
}

