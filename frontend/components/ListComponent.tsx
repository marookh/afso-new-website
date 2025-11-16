import Image from 'next/image'
import Link from 'next/link'

interface ListItem {
  id: string
  title: string
  excerpt?: string
  image?: string
  date?: string
  href: string
}

interface ListComponentProps {
  items: ListItem[]
  title?: string
  className?: string
}

export default function ListComponent({
  items,
  title,
  className = '',
}: ListComponentProps) {
  return (
    <div className={className}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">{title}</h2>
      )}
      <div className="space-y-6">
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="block group"
          >
            <div className="grid md:grid-cols-3 gap-6 bg-white hover:shadow-md transition-shadow p-6">
              {item.image && (
                <div className="relative h-48 md:h-full min-h-[200px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}
              <div className={item.image ? 'md:col-span-2' : 'md:col-span-3'}>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#3ba5c1] transition-colors">
                  {item.title}
                </h3>
                {item.excerpt && (
                  <p className="text-gray-700 leading-relaxed mb-2">{item.excerpt}</p>
                )}
                {item.date && (
                  <p className="text-sm text-gray-500">{item.date}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

