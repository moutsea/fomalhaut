"use client";

import { useTranslations } from "next-intl";
import { Users, MapPin, Briefcase, Cpu } from "lucide-react";
import Image from "next/image";

export default function TeamSection() {
  const t = useTranslations("team");
  
  const locations = t.raw("locations.items") as string[];
  const backgrounds = [
    { name: "Alibaba", src: "/alibaba.png" },
    { name: "Ant Financial", src: "/ant_financial.png" },
    { name: "Shopee", src: "/shopee.png" },
    { name: "HKU", src: "/HKU.png" },
  ];
  
  const mlTags = t.raw("wordCloud.ml") as string[];
  const backendTags = t.raw("wordCloud.backend") as string[];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Background & Location */}
          <div className="space-y-12">
            {/* Locations */}
            <div className="p-8 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t("locations.title")}</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {locations.map((loc) => (
                  <span key={loc} className="px-4 py-2 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 font-semibold border border-cyan-100 dark:border-cyan-800">
                    {loc}
                  </span>
                ))}
              </div>
            </div>

            {/* Background Logos */}
            <div className="p-8 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t("backgrounds.title")}</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center">
                {backgrounds.map((bg) => (
                  <div key={bg.name} className="group relative flex flex-col items-center gap-3">
                    <div className="relative w-16 h-16 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-md">
                      <Image
                        src={bg.src}
                        alt={bg.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {bg.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Word Cloud */}
          <div className="relative p-8 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-xl min-h-[500px] flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t("wordCloud.title")}</h3>
            </div>
            
            <div className="flex-1 relative flex flex-wrap content-center justify-center gap-3 p-4">
              {[...mlTags, ...backendTags].map((tag, idx) => {
                // Determine size and color based on index or content
                const isML = mlTags.includes(tag);
                const size = idx % 3 === 0 ? "text-xl font-bold" : idx % 3 === 1 ? "text-lg font-semibold" : "text-sm font-medium";
                const color = isML 
                  ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/10 border-cyan-100 dark:border-cyan-800" 
                  : "text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/10 border-purple-100 dark:border-purple-800";
                
                return (
                  <span
                    key={tag}
                    className={`px-4 py-2 rounded-full border shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default ${size} ${color}`}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-cyan-400 blur-sm animate-pulse" />
            <div className="absolute bottom-1/4 right-10 w-3 h-3 rounded-full bg-purple-400 blur-sm animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}