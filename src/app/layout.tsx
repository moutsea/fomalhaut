import "@/app/globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from '@vercel/speed-insights/next';

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: "normal"
})

import { getSiteUrl } from '@/lib/i18n'
import { ThemeProvider } from "@/components/providers/theme-provider";

export const dynamic = 'force-static';

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  // 全局只放"与语言无关"的部分
  metadataBase: new URL(getSiteUrl()),
  robots: 'index, follow, max-image-preview:large',
  authors: [{ name: 'Code By AI Team' }],
  creator: 'Code By AI Team',
  publisher: 'Code By AI',
  category: 'Technology',
  icons: {
    icon: '/favicon.ico',
  },
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale } = await params || {};
  const lang = locale || 'en';

  return (
    <html lang={lang} className={poppins.className} suppressHydrationWarning>
      <head>
        <meta name="msvalidate.01" content="8B900A7AD31AF4E513F58422B9EBA7E5" />
        <meta name="google-site-verification" content="zISNddYhqPtC0GuOluBUyUvQGI_7J1ZxYlkD_LFzWSg" />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
