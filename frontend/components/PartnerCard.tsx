import Image from 'next/image'

interface PartnerCardProps {
  name: string
  description: string
  logo: string
  className?: string
}

export default function PartnerCard({
  name,
  description,
  logo,
  className = '',
}: PartnerCardProps) {
  return (
    <div className={`bg-white shadow-md hover:shadow-lg transition-shadow overflow-hidden h-full flex flex-col ${className}`}>
      <div className="relative h-48 w-full bg-gray-50 flex items-center justify-center p-6">
        <Image
          src={logo}
          alt={name}
          width={200}
          height={120}
          className="object-contain max-w-full max-h-full"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{name}</h3>
        <p className="text-gray-700 leading-relaxed flex-grow">{description}</p>
      </div>
    </div>
  )
}

