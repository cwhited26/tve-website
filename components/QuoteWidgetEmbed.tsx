'use client'

/**
 * QuoteWidgetEmbed — thin wrapper that renders the full QuoteWizard.
 * Props are accepted for backwards-compatibility but the wizard manages its own state.
 */
import { QuoteWizard } from '@/components/quote/QuoteWizard'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function QuoteWidgetEmbed(_props?: {
  service?: string
  city?: string
  heading?: string
  subheading?: string
}) {
  return <QuoteWizard />
}
