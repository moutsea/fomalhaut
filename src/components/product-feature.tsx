import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProductItem {
  title: string;
  description: string;
  link: string;
  linkText: string;
  logo: string;
  backgroundImage: string;
}

interface ProductFeatureProps {
  hideTitle?: boolean;
}

export default async function ProductFeature({ hideTitle = false }: ProductFeatureProps) {
  const t = await getTranslations("products");
  const rawItems = t.raw("items");
  const products: ProductItem[] = Array.isArray(rawItems) ? (rawItems as ProductItem[]) : [];

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {!hideTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product, index) => {
            const isHighlighted = product.backgroundImage.includes('cs61bbg') || product.backgroundImage.includes('codex_hello');
            return (
              <div 
                key={index} 
                className="group relative flex flex-col p-8 rounded-3xl overflow-hidden bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Product Background Image */}
                <div className="absolute inset-0 -z-10 overflow-hidden">
                  <Image
                    src={product.backgroundImage}
                    alt={`${product.title} background`}
                    fill
                    className={`object-cover transition-all duration-500 group-hover:scale-110 ${
                      isHighlighted 
                        ? "opacity-45 group-hover:opacity-65" 
                        : "opacity-15 group-hover:opacity-30"
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-500 ${
                    isHighlighted
                      ? "from-white/85 via-white/50 to-transparent dark:from-black/75 dark:via-black/30 dark:to-transparent"
                      : "from-white/95 via-white/70 to-transparent dark:from-black/90 dark:via-black/50 dark:to-transparent"
                  }`} />
                </div>

                <div className="flex items-start justify-between mb-6">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-gray-100 dark:border-white/10 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={product.logo}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Link 
                    href={product.link}
                    target="_blank"
                    className="p-2 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-1">
                  {product.description}
                </p>

                <Link
                  href={product.link}
                  target="_blank" 
                  className="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                >
                  {product.linkText}
                  <ArrowUpRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}