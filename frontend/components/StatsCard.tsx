interface StatsCardProps {
  value: string | number
  label: string
  description?: string
  className?: string
}

export default function StatsCard({
  value,
  label,
  description,
  className = '',
}: StatsCardProps) {
  return (
    <div className={`bg-white p-6 text-center ${className}`}>
      <div className="text-4xl md:text-5xl font-bold text-[#3ba5c1] mb-2">
        {value}
      </div>
      <div className="text-lg font-semibold text-gray-900 mb-2">{label}</div>
      {description && (
        <div className="text-sm text-gray-600">{description}</div>
      )}
    </div>
  )
}

