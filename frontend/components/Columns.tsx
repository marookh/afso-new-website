interface ColumnsProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode
  className?: string
}

export default function Columns({
  leftContent,
  rightContent,
  className = '',
}: ColumnsProps) {
  return (
    <div className={`grid md:grid-cols-2 gap-8 ${className}`}>
      <div>{leftContent}</div>
      <div>{rightContent}</div>
    </div>
  )
}

