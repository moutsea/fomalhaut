import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Zap, Shield, Globe, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getMessagesStatic } from "@/lib/messages";

export const dynamic = 'force-static';

interface ProductItem {
  title: string;
  description: string;
  link: string;
  linkText: string;
  logo: string;
  backgroundImage: string;
  features: string[];
  useCase: string;
  pricing: string | string[];
}

const slugMap: Record<string, number> = {
  "cs61b-beyond": 0,
  "code-by-ai": 1,
  "claude-ide": 2,
  "code-i": 3,
};

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(slugMap).map((slug) => ({ slug }));
}

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;
  const messages = getMessagesStatic(locale);
  const rawItems = messages.products.items;
  const products: ProductItem[] = Array.isArray(rawItems) ? (rawItems as ProductItem[]) : [];

  const index = slugMap[slug];

  if (index === undefined || !products[index]) {
    notFound();
  }

  const product = products[index];

  return (
    <div className="px-6 py-12 md:px-12 md:py-16 max-w-5xl mx-auto animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
        <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg">
          <Image
            src={product.logo}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {product.description}
          </p>
          <Button asChild size="lg" className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white">
            <Link href={product.link} target="_blank">
              {product.linkText}
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Preview Image */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl mb-16 border border-gray-200 dark:border-white/10 group">
        <Image
          src={product.backgroundImage}
          alt={`${product.title} preview`}
          fill
          className="object-cover object-left transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay to ensure it looks good even if image is abstract */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
      </div>

      {/* Content Grid */}
      <div className="space-y-12">
        {/* Main Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-amber-500" />
              Key Features
            </h2>
            <ul className="space-y-4">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-blue-500" />
              Use Cases
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.useCase}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-purple-500" />
              Pricing & Plans
            </h2>
            <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-500/20">
              {Array.isArray(product.pricing) ? (
                <ul className="space-y-3">
                  {product.pricing.map((point, idx) => (
                    <li key={idx} className="flex gap-3 items-start text-indigo-900 dark:text-indigo-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                      <span className="font-medium text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg font-semibold text-indigo-900 dark:text-indigo-300">
                  {product.pricing}
                </p>
              )}
            </div>
          </section>
        </div>

        {/* Security & Trust - Footer style */}
        <div className="pt-12 mt-12 border-t border-gray-200 dark:border-white/5">
          <div className="flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-500 dark:text-gray-400">
              <Shield className="w-4 h-4" />
              Security & Trust
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 max-w-lg mb-4">
              We prioritize your data privacy and security. All interactions are encrypted and processed with the highest standards.
            </p>
            <div className="flex gap-3 text-[10px] font-medium text-gray-400 uppercase tracking-wider">
              <span>SOC2</span>
              <span>•</span>
              <span>GDPR</span>
              <span>•</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
