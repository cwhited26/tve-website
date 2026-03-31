import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CardProps {
  children: React.ReactNode
  className?: string
  href?: string
}

/** Base card — white bg, border, rounded-xl, hover shadow */
export function Card({ children, className = '', href }: CardProps) {
  const base =
    'bg-white border border-[#E2E8F0] rounded-xl transition-shadow duration-200 hover:shadow-md'
  const classes = [base, className].filter(Boolean).join(' ')

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  return <div className={classes}>{children}</div>
}

interface ServiceCardProps {
  name: string
  description: string
  href: string
  icon?: React.ReactNode
}

/** Service card used on homepage grid and services hub */
export function ServiceCard({ name, description, href, icon }: ServiceCardProps) {
  return (
    <Card href={href} className="p-6 flex flex-col gap-4 group">
      {icon && (
        <div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-[#334155] font-semibold text-lg leading-tight mb-2">{name}</h3>
        <p className="text-[#64748B] text-sm leading-relaxed line-clamp-2">{description}</p>
      </div>
      <div className="mt-auto flex items-center gap-1 text-[#2563EB] text-sm font-semibold group-hover:gap-2 transition-all duration-200">
        Learn More <ArrowRight size={16} aria-hidden="true" />
      </div>
    </Card>
  )
}

interface TestimonialCardProps {
  quote: string
  name: string
  location: string
  rating?: number
}

/** Customer testimonial card */
export function TestimonialCard({ quote, name, location, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="p-6 flex flex-col gap-4">
      <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-[#F59E0B]' : 'text-[#E2E8F0]'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <blockquote>
        <p className="text-[#334155] italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <footer>
        <p className="font-semibold text-[#334155] text-sm">{name}</p>
        <p className="text-[#64748B] text-sm">{location}</p>
      </footer>
    </Card>
  )
}
