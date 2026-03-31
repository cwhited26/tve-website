interface ContainerProps {
  children: React.ReactNode
  className?: string
  narrow?: boolean
}

/**
 * Standard content container.
 * - Default: max-w-7xl (1280px)
 * - Narrow: max-w-3xl (768px) — for blog posts and long-form text
 */
export function Container({ children, className = '', narrow = false }: ContainerProps) {
  return (
    <div
      className={[
        'mx-auto w-full px-6 md:px-8',
        narrow ? 'max-w-3xl' : 'max-w-7xl',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
