import Link from 'next/link'

interface ButtonStyleCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  className?: string
}

export default function ButtonStyleCard({
  icon,
  title,
  description,
  href,
  className = '',
}: ButtonStyleCardProps) {
  return (
    <Link
      href={href}
      className={`block p-6 bg-white border-2 border-gray-200 hover:border-[#3ba5c1] hover:shadow-md transition-all group h-full flex flex-col ${className}`}
    >
      <div className="flex items-start flex-grow flex-col">
        <div className="flex items-start w-full flex-grow">
          <div className="flex-shrink-0 w-12 h-12 text-[#3ba5c1] group-hover:text-[#2d8fa8] transition-colors">
            {icon}
          </div>
          <div className="ml-4 flex-1 flex flex-col min-h-0">
            <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-[#3ba5c1] transition-colors">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-3 flex-grow">{description}</p>
          </div>
        </div>
        <div className="mt-auto pt-2 w-full flex justify-center">
          <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#3ba5c1] hover:bg-[#2d8fa8] transition-colors">
            Explore Now
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}

