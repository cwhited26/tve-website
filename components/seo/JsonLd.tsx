interface JsonLdProps {
  schema: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * Renders a JSON-LD structured data script tag.
 * Pass an array to include multiple schemas on one page.
 */
export function JsonLd({ schema }: JsonLdProps) {
  const data = Array.isArray(schema)
    ? { '@context': 'https://schema.org', '@graph': schema }
    : schema

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
