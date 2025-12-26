"use client";

import { useTranslations } from "next-intl";
import { Mail, Twitter, CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactUs() {
  const t = useTranslations("contactUs");

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-2xl relative overflow-hidden">
            {/* Decorative gradients */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-[80px]" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-purple-500/10 blur-[80px]" />

            <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 text-white mb-6 shadow-lg shadow-purple-500/20">
                    <MessageCircle className="w-6 h-6" />
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                    <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                        {t("title")}
                    </span>
                </h2>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 font-medium">
                    {t("subtitle")}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                    <Button 
                        asChild 
                        size="lg" 
                        className="w-full sm:w-auto rounded-full px-8 py-6 text-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
                    >
                        <Link href="mailto:cfjwlchangji@gmail.com">
                            <Mail className="w-5 h-5 mr-2" />
                            {t("email")}
                        </Link>
                    </Button>
                    
                    <Button 
                        asChild 
                        variant="outline" 
                        size="lg" 
                        className="w-full sm:w-auto rounded-full px-8 py-6 text-lg border-gray-300 dark:border-white/20 bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 text-gray-700 dark:text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                    >
                        <Link href="https://x.com/LiangMout95522" target="_blank">
                            <Twitter className="w-5 h-5 mr-2" />
                            {t("twitter")}
                        </Link>
                    </Button>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm md:text-base text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span>{t("getInTouch")}</span>
                    </div>
                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                        <span>{t("supportTeam")}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
