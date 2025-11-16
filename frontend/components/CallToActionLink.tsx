import Link from 'next/link'

interface CallToActionLinkProps {
  text: string
  href: string
  icon?: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CallToActionLink({
  text,
  href,
  icon,
  variant = 'primary',
  className = '',
}: CallToActionLinkProps) {
  const baseStyles = 'inline-flex items-center font-medium transition-colors'
  
  const variantStyles = {
    primary: 'text-[#3ba5c1] hover:text-[#2d8fa8] hover:underline',
    secondary: 'text-gray-900 hover:text-[#3ba5c1] hover:underline',
  }

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {icon && <span className="mr-2">{icon}</span>}
      <span>{text}</span>
      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}

