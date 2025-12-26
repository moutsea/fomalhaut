'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Sparkles, Code2, Rocket } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
    const t = useTranslations('hero')

    return (
        <section className='relative px-4 pt-32 pb-20 sm:px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden'>
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/background.png"
                    alt="Hero Background"
                    fill
                    priority
                    className="object-cover opacity-40 dark:opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            </div>
            
            {/* Animated badge */}
            <div className="inline-flex items-center justify-center gap-2 px-5 py-2 mb-8 transition-all duration-300 ease-out border rounded-full bg-white/50 dark:bg-white/10 border-indigo-500/20 dark:border-white/20 backdrop-blur-sm hover:bg-white/80 dark:hover:bg-white/20 hover:scale-105 cursor-default shadow-sm animate-in fade-in slide-in-from-bottom-4">
                <Rocket className="w-4 h-4 text-indigo-600 dark:text-indigo-300" />
                <span className="text-sm font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent">
                    {t('eyebrow')}
                </span>
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-300" />
            </div>

            {/* Main title with refined gradient */}
            <h1 className='text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl max-w-5xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100'>
                <span className='bg-gradient-to-b from-gray-900 via-gray-900 to-gray-600 dark:from-white dark:via-white dark:to-white/60 bg-clip-text text-transparent'>
                    {t('title')}
                </span>
            </h1>

            <p className='mt-4 text-xl sm:text-2xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200'>
                {t('description')}
            </p>

            {/* CTA buttons */}
            <div className='mt-12 flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300'>
                <Button
                    size="lg"
                    className='rounded-full px-10 py-7 text-lg font-semibold bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition-all duration-300'
                    asChild
                >
                    <Link href="#products">
                        {t('cta')}
                        <ArrowRight className='ml-2 h-5 w-5' />
                    </Link>
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    className='rounded-full px-10 py-7 text-lg font-semibold bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-white/20 dark:text-white dark:hover:bg-white/5 transition-all duration-300'
                    asChild
                >
                    <Link href="#team">
                        {t('secondaryCta')}
                    </Link>
                </Button>
            </div>

            {/* Code preview section */}
            <div className="mt-24 relative w-full max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-500">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20" />
                <div className="relative bg-[#050505] border border-white/10 rounded-2xl p-8 shadow-2xl">
                    <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        <div className="text-xs text-gray-500 font-mono flex items-center gap-2">
                            <Code2 className="w-3 h-3" />
                            setup-env.sh
                        </div>
                    </div>
                    <pre className="text-left text-sm sm:text-base overflow-x-auto">
                        <code className="text-gray-300 font-mono leading-relaxed">
                            <span className="text-purple-400">export</span> <span className="text-cyan-400">ANTHROPIC_BASE_URL</span>=<span className="text-[#a5d6ff]">&quot;https://www.codebyai.net/api/agent&quot;</span><br/>
                            <span className="text-purple-400">export</span> <span className="text-cyan-400">ANTHROPIC_AUTH_TOKEN</span>=<span className="text-[#a5d6ff]">&quot;sk-proj-xxxx&quot;</span> <span className="text-gray-500"># Replace with your API Key</span><br/>
                            <span className="text-purple-400">export</span> <span className="text-cyan-400">API_TIMEOUT_MS</span>=<span className="text-[#a5d6ff]">600000</span><br/>
                            <span className="text-purple-400">export</span> <span className="text-cyan-400">CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC</span>=<span className="text-[#a5d6ff]">1</span>
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    )
}