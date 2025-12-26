"use client";

import { useTranslations } from "next-intl";
import { Calendar, CheckCircle2 } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

export default function Timeline() {
  const t = useTranslations("timeline");
  const rawItems = t.raw("items");
  const items: TimelineItem[] = Array.isArray(rawItems) ? (rawItems as TimelineItem[]) : [];

  if (items.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            <span>{t("title")}</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center md:justify-between ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-background border-2 border-indigo-500 z-10 -translate-x-1/2 md:-translate-x-1/2 shadow-[0_0_10px_rgba(79,70,229,0.5)]" />

                {/* Content Card */}
                <div className="ml-12 md:ml-0 md:w-[45%] group">
                  <div className="p-6 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="text-indigo-600 dark:text-indigo-400 font-bold text-sm mb-2">
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-2">
                      {item.title}
                      <CheckCircle2 className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
