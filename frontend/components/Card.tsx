import Image from 'next/image'
import Link from 'next/link'

interface CardProps {
  title: string
  description?: string
  image?: string
  imageAlt?: string
  href?: string
  footer?: React.ReactNode
  className?: string
}

// Vertical Card component matching Harvard design system
export default function Card({
  title,
  description,
  image,
  imageAlt,
  href,
  footer,
  className = '',
}: CardProps) {
  const content = (
    <div className={`bg-white overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {image && (
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
        {description && (
          <p className="text-gray-700 leading-relaxed mb-4">{description}</p>
        )}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block group" prefetch={true}>
        {content}
      </Link>
    )
  }

  return content
}

