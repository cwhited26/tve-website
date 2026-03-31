import Link from 'next/link'
import { Phone } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'phone'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  fullWidth?: boolean
  external?: boolean
}

const variantClasses = {
  primary:
    'bg-[#2563EB] text-white hover:bg-[#1d4ed8] border border-transparent',
  secondary:
    'bg-white text-[#2563EB] border border-[#2563EB] hover:bg-[#2563EB] hover:text-white',
  ghost:
    'bg-transparent text-white border border-white/40 hover:bg-white/10',
  phone:
    'bg-[#2563EB] text-white hover:bg-[#1d4ed8] border border-transparent',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm min-h-[36px]',
  md: 'px-6 py-3 text-base min-h-[44px]',
  lg: 'px-8 py-4 text-lg min-h-[52px]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
  external = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  const classes = [
    base,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    if (external || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          className={classes}
          rel={external ? 'noopener noreferrer' : undefined}
          target={external ? '_blank' : undefined}
        >
          {variant === 'phone' && <Phone size={18} aria-hidden="true" />}
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {variant === 'phone' && <Phone size={18} aria-hidden="true" />}
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {variant === 'phone' && <Phone size={18} aria-hidden="true" />}
      {children}
    </button>
  )
}

/** Convenience component for the persistent phone CTA */
export function PhoneButton({ className = '' }: { className?: string }) {
  return (
    <Button variant="phone" href={COMPANY.phoneTel} className={className}>
      {COMPANY.phone}
    </Button>
  )
}
