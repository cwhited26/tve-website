interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'light' | 'navy' | 'none'
  id?: string
  as?: 'section' | 'div' | 'article' | 'aside'
}

const bgClasses = {
  white: 'bg-white',
  light: 'bg-[#F8F9FA]',
  navy: 'bg-[#0A1628] text-white',
  none: '',
}

/**
 * Standard page section with consistent vertical spacing.
 * Alternates white / light-gray per spec for visual rhythm.
 */
export function Section({
  children,
  className = '',
  background = 'white',
  id,
  as: Tag = 'section',
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={['py-12 md:py-20', bgClasses[background], className].filter(Boolean).join(' ')}
    >
      {children}
    </Tag>
  )
}
