import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { JsonLd } from './JsonLd'
import { buildBreadcrumbSchema, type BreadcrumbItem } from '@/lib/seo'

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

/**
 * Visual breadcrumb navigation + BreadcrumbList JSON-LD schema.
 * First item should always be Home.
 */
export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const schema = buildBreadcrumbSchema(items)

  return (
    <>
      <JsonLd schema={schema} />
      <nav
        aria-label="Breadcrumb"
        className={['text-sm text-[#64748B]', className].filter(Boolean).join(' ')}
      >
        <ol className="flex items-center gap-1 flex-wrap" role="list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1
            return (
              <li key={index} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight size={14} className="text-[#64748B]/50" aria-hidden="true" />
                )}
                {isLast || !item.href ? (
                  <span className="text-[#334155]" aria-current={isLast ? 'page' : undefined}>
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-[#2563EB] transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
