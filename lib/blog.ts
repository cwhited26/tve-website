import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export type BlogCategory =
  | 'roofing'
  | 'siding'
  | 'gutters'
  | 'decks'
  | 'painting'
  | 'storm-damage'
  | 'tips'

export interface BlogFrontmatter {
  title: string
  description: string
  date: string
  author: string
  category: BlogCategory
  image: string
  keywords: string[]
}

export interface BlogPost extends BlogFrontmatter {
  slug: string
  /** Estimated reading time in minutes */
  readTime: number
  excerpt: string
}

export interface BlogPostWithContent extends BlogPost {
  content: string
}

/** Average words per minute for reading time estimation */
const WPM = 225

function estimateReadTime(content: string): number {
  const wordCount = content.trim().split(/\s+/).length
  return Math.max(1, Math.round(wordCount / WPM))
}

function extractExcerpt(content: string, maxLength = 160): string {
  // Remove MDX/markdown syntax, take first real paragraph
  const stripped = content
    .replace(/^---[\s\S]*?---\n/, '')
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*|__|\*|_/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`[^`]+`/g, '')
    .trim()

  const firstParagraph = stripped.split(/\n\n+/)[0] ?? ''
  if (firstParagraph.length <= maxLength) return firstParagraph
  return firstParagraph.slice(0, maxLength).replace(/\s\S*$/, '') + '…'
}

/** Get all blog post slugs */
export function getBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

/** Get a single post's metadata + content by slug */
export function getBlogPostBySlug(slug: string): BlogPostWithContent | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  const frontmatter = data as BlogFrontmatter

  return {
    ...frontmatter,
    slug,
    readTime: estimateReadTime(content),
    excerpt: frontmatter.description || extractExcerpt(content),
    content,
  }
}

/** Get all posts sorted by date descending */
export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => {
      const post = getBlogPostBySlug(slug)
      if (!post) return null
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content: _content, ...meta } = post
      return meta
    })
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/** Get posts by category */
export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllBlogPosts().filter((p) => p.category === category)
}

/** Get N most recent posts, optionally excluding a slug */
export function getRecentPosts(limit: number, excludeSlug?: string): BlogPost[] {
  return getAllBlogPosts()
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, limit)
}

/** Get related posts by same category */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return getAllBlogPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit)
}

/** Paginate posts */
export function getPaginatedPosts(page: number, perPage = 10) {
  const all = getAllBlogPosts()
  const totalPages = Math.max(1, Math.ceil(all.length / perPage))
  const validPage = Math.min(Math.max(1, page), totalPages)
  const posts = all.slice((validPage - 1) * perPage, validPage * perPage)
  return { posts, totalPages, currentPage: validPage, total: all.length }
}

export const BLOG_CATEGORIES: { value: BlogCategory; label: string }[] = [
  { value: 'roofing', label: 'Roofing' },
  { value: 'siding', label: 'Siding' },
  { value: 'gutters', label: 'Gutters' },
  { value: 'decks', label: 'Decks' },
  { value: 'painting', label: 'Exterior Painting' },
  { value: 'storm-damage', label: 'Storm Damage' },
  { value: 'tips', label: 'Homeowner Tips' },
]
