import Image from 'next/image'
import Link from 'next/link'

interface FiftyFiftyCardProps {
  image: string
  imageAlt: string
  title?: string
  content: React.ReactNode
  imagePosition?: 'left' | 'right'
  href?: string
  className?: string
}

export default function FiftyFiftyCard({
  image,
  imageAlt,
  title,
  content,
  imagePosition = 'left',
  href,
  className = '',
}: FiftyFiftyCardProps) {
  const imageSection = (
    <div className="relative h-64 md:h-full min-h-[300px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  )

  const contentSection = (
    <div className="p-8 md:p-12 flex flex-col justify-center">
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">{title}</h2>
      )}
      <div className="text-lg text-gray-700 leading-relaxed">{content}</div>
    </div>
  )

  const cardContent = (
    <div className={`grid md:grid-cols-2 ${className}`}>
      {imagePosition === 'left' ? (
        <>
          {imageSection}
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          {imageSection}
        </>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block bg-white hover:shadow-lg transition-shadow">
        {cardContent}
      </Link>
    )
  }

  return <div className="bg-white">{cardContent}</div>
}

