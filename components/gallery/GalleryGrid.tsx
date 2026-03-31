'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, ArrowRight } from 'lucide-react'
import type { GalleryProject, ServiceType } from '@/lib/gallery'
import { SERVICE_FILTER_OPTIONS, CITY_FILTER_OPTIONS } from '@/lib/gallery'

interface Props {
  projects: GalleryProject[]
}

interface LightboxState {
  project: GalleryProject
  view: 'before' | 'after'
}

export function GalleryGrid({ projects }: Props) {
  const [serviceFilter, setServiceFilter] = useState<ServiceType | 'all'>('all')
  const [cityFilter, setCityFilter] = useState<string>('all')
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const filtered = projects.filter((p) => {
    const matchService = serviceFilter === 'all' || p.service === serviceFilter
    const matchCity = cityFilter === 'all' || p.city === cityFilter
    return matchService && matchCity
  })

  return (
    <>
      {/* ── Filters ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-3 mb-8">
        <div className="flex flex-col gap-1">
          <label htmlFor="service-filter" className="text-xs font-medium text-[#64748B] uppercase tracking-wide">
            Service
          </label>
          <select
            id="service-filter"
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value as ServiceType | 'all')}
            className="min-h-[44px] px-3 pr-8 rounded-lg border border-[#E2E8F0] bg-white text-[#0A1628] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer"
          >
            {SERVICE_FILTER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="city-filter" className="text-xs font-medium text-[#64748B] uppercase tracking-wide">
            City
          </label>
          <select
            id="city-filter"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="min-h-[44px] px-3 pr-8 rounded-lg border border-[#E2E8F0] bg-white text-[#0A1628] text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer"
          >
            {CITY_FILTER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {(serviceFilter !== 'all' || cityFilter !== 'all') && (
          <div className="flex flex-col gap-1">
            <span className="text-xs font-medium text-transparent uppercase tracking-wide">Reset</span>
            <button
              onClick={() => { setServiceFilter('all'); setCityFilter('all') }}
              className="min-h-[44px] px-4 rounded-lg border border-[#E2E8F0] bg-white text-[#64748B] text-sm hover:bg-[#F8F9FA] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        <div className="flex flex-col gap-1 ml-auto">
          <span className="text-xs font-medium text-transparent uppercase tracking-wide">Count</span>
          <span className="min-h-[44px] px-4 rounded-lg bg-[#F8F9FA] text-[#64748B] text-sm flex items-center">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center text-[#64748B]">
          <p className="text-lg">No projects match your filters.</p>
          <button
            onClick={() => { setServiceFilter('all'); setCityFilter('all') }}
            className="mt-4 text-[#2563EB] font-medium hover:underline min-h-[44px]"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenLightbox={(view) => setLightbox({ project, view })}
            />
          ))}
        </div>
      )}

      {/* ── Lightbox ────────────────────────────────────────────────────────── */}
      {lightbox && (
        <Lightbox
          state={lightbox}
          onChangeView={(view) => setLightbox({ ...lightbox, view })}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  )
}

// ─── Project Card ─────────────────────────────────────────────────────────────

interface CardProps {
  project: GalleryProject
  onOpenLightbox: (view: 'before' | 'after') => void
}

function ProjectCard({ project, onOpenLightbox }: CardProps) {
  const hasBeforeAfter = project.imageAfter !== null

  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow group">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-[#F8F9FA] overflow-hidden">
        <Image
          src={project.imageAfter ?? project.imageBefore}
          alt={project.altText}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        {hasBeforeAfter && (
          <button
            onClick={() => onOpenLightbox('after')}
            aria-label={`View before and after photos for ${project.title}`}
            className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors group/btn"
          >
            <span className="opacity-0 group-hover/btn:opacity-100 transition-opacity bg-white/90 text-[#0A1628] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
              Before / After <ArrowRight size={12} aria-hidden />
            </span>
          </button>
        )}
        <span className="absolute top-3 left-3 bg-[#2563EB] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {project.serviceLabel}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-[#0A1628] text-sm leading-snug mb-1">{project.title}</h3>
        <p className="text-xs text-[#64748B] mb-2 flex items-center gap-1">
          <MapPin size={11} aria-hidden />
          {project.city}, {project.state} · {project.year}
        </p>
        <p className="text-xs text-[#475569] leading-relaxed">{project.detail}</p>
      </div>
    </article>
  )
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

interface LightboxProps {
  state: LightboxState
  onChangeView: (view: 'before' | 'after') => void
  onClose: () => void
}

function Lightbox({ state, onChangeView, onClose }: LightboxProps) {
  const { project, view } = state
  const hasAfter = project.imageAfter !== null
  const src = view === 'before' ? project.imageBefore : (project.imageAfter ?? project.imageBefore)

  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${project.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className="relative max-w-3xl w-full bg-[#0A1628] rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
          <div>
            <p className="text-white font-semibold text-sm">{project.title}</p>
            <p className="text-white/60 text-xs">
              {project.city}, {project.state} · {project.serviceLabel}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close photo viewer"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white/60 hover:text-white transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] bg-black">
          <Image
            src={src}
            alt={view === 'before' ? `Before: ${project.altText}` : project.altText}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-contain"
            priority
          />
          <span className="absolute top-3 left-3 bg-black/60 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            {view}
          </span>
        </div>

        {/* Before/After toggle */}
        {hasAfter && (
          <div className="flex border-t border-white/10">
            <button
              onClick={() => onChangeView('before')}
              className={`flex-1 py-3 text-sm font-medium min-h-[44px] transition-colors ${
                view === 'before'
                  ? 'text-white bg-white/10'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => onChangeView('after')}
              className={`flex-1 py-3 text-sm font-medium min-h-[44px] transition-colors ${
                view === 'after'
                  ? 'text-white bg-white/10'
                  : 'text-white/50 hover:text-white hover:bg-white/5'
              }`}
            >
              After
            </button>
          </div>
        )}

        {/* Detail */}
        <div className="px-5 py-3 border-t border-white/10">
          <p className="text-white/70 text-xs leading-relaxed">{project.detail}</p>
        </div>
      </div>
    </div>
  )
}
