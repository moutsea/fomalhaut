"use client";

import { Quote, Star, StarHalf } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface TestimonialItem {
  name: string;
  role: string;
  feedback: string;
  avatar: string;
  rating?: number;
}

export default function UserComments() {
  const t = useTranslations("testimonials");
  const rawItems = t.raw("items");
  const testimonials: TestimonialItem[] = Array.isArray(rawItems) ? (rawItems as TestimonialItem[]) : [];

  if (testimonials.length === 0) {
      return null;
  }

  const renderStars = (rating: number = 5) => {
    return (
      <div className="flex gap-1 mb-4">
        {[...Array(Math.floor(rating))].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
        {rating % 1 !== 0 && (
          <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        )}
      </div>
    );
  };

  return (
    <section className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-200 dark:border-pink-500/30 text-pink-600 dark:text-pink-400 text-sm font-medium mb-6">
            <Quote className="w-4 h-4 fill-current" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/50 dark:to-gray-800/30 border border-gray-200 dark:border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Quote icon */}
                <div className="mb-6 text-pink-500/40 group-hover:text-pink-500/60 transition-colors">
                  <Quote className="w-12 h-12 fill-current" />
                </div>

                {/* Rating stars */}
                {testimonial.rating && renderStars(testimonial.rating)}

                {/* Feedback text */}
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 min-h-[120px]">
                  &quot;{testimonial.feedback}&quot;
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-200 dark:border-gray-700/50">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-cyan-500 ring-2 ring-pink-500/30 group-hover:ring-pink-400/50 transition-all">
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                      />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-pink-600 dark:text-pink-400 font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            {t("footerText")}
          </p>
        </div>
      </div>
    </section>
  );
}
