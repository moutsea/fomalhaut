'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CarouselProps {
  images: {
    src: string
    alt: string
    label?: string
  }[]
  interval?: number
}

export function HeroImageCarousel({ images, interval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="relative w-full max-w-full mx-auto aspect-[16/10] perspective-1000 group">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-cyan-400/20 blur-3xl rounded-3xl" />

      {/* Main Container */}
      <div className="relative w-full h-full rounded-2xl border border-white/10 bg-gray-950 shadow-2xl overflow-hidden">
        {/* Header / Toolbar mock */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-20">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <div className="ml-4 text-[10px] text-white/40 font-mono flex-1 text-center">
                {images[currentIndex].label || 'agent-workspace'}
            </div>
        </div>

        {/* Images */}
        {images.map((image, index) => (
          <div
            key={image.src}
            className={cn(
              "absolute inset-0 top-8 transition-all duration-700 ease-in-out transform",
              index === currentIndex
                ? "opacity-100 translate-x-0 scale-100 z-10"
                : "opacity-0 translate-x-8 scale-95 z-0"
            )}
          >
            <div className="relative w-full h-full bg-gray-900/50">
                <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        idx === currentIndex ? "bg-white w-6" : "bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                />
            ))}
        </div>
      </div>
    </div>
  )
}
