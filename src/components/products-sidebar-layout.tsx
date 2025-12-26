"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Cpu, GraduationCap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

interface ProductItem {
  slug: string;
  title: string;
  category: "education" | "ai-tools";
}

interface ProductsSidebarLayoutProps {
  products: ProductItem[];
  children: ReactNode;
}

function groupProductsByCategory(products: ProductItem[]) {
  return products.reduce<Record<string, ProductItem[]>>((acc, prod) => {
    if (!acc[prod.category]) {
      acc[prod.category] = [];
    }
    acc[prod.category].push(prod);
    return acc;
  }, {});
}

function getCategoryIcon(category: string) {
    if (category === "education") return <GraduationCap className="h-4 w-4 text-pink-500" />;
    return <Cpu className="h-4 w-4 text-indigo-500" />;
}

function formatCategoryName(category: string): string {
  if (category === "ai-tools") return "AI Tools";
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function ProductLinks({
  groupedProducts,
  currentSlug,
  locale,
}: {
  groupedProducts: Record<string, ProductItem[]>;
  currentSlug?: string;
  locale: string;
}) {
  return (
    <div className="space-y-8">
      {Object.entries(groupedProducts).map(([category, prods]) => (
        <div key={category}>
          <div className="flex items-center gap-2 px-3 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
            {getCategoryIcon(category)}
            <span>{formatCategoryName(category)}</span>
          </div>
          <ul className="space-y-1">
            {prods.map((prod) => {
              const isActive = currentSlug === prod.slug;
              const href = locale === 'en' ? `/products/${prod.slug}` : `/${locale}/products/${prod.slug}`;
              
              return (
                <li key={prod.slug}>
                  <Link
                    href={href}
                    className={cn(
                      "group flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                      isActive
                        ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-gray-200"
                    )}
                  >
                    <span>{prod.title}</span>
                    {isActive && <ArrowRight className="h-4 w-4 text-indigo-500" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ProductsSidebarLayout({
  products,
  children,
}: ProductsSidebarLayoutProps) {
  const pathname = usePathname();
  const locale = useLocale();
  
  // Extract slug from pathname: /en/products/[slug] or /products/[slug]
  // segments will be ["", "en", "products", "slug"] or ["", "products", "slug"]
  const segments = pathname.split('/');
  const lastSegment = segments[segments.length - 1];
  const currentSlug = lastSegment === "products" ? undefined : lastSegment;

  const groupedProducts = groupProductsByCategory(products);

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-64px)]"> {/* Subtract header height */}
      {/* Mobile navigation */}
      <div className="md:hidden p-4 border-b border-gray-200 dark:border-white/10">
        <details className="group rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] p-3">
          <summary className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200">
            <Menu className="h-4 w-4" />
            <span>Select Product</span>
          </summary>
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-white/10">
            <ProductLinks
              groupedProducts={groupedProducts}
              currentSlug={currentSlug}
              locale={locale}
            />
          </div>
        </details>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 md:flex md:flex-col self-stretch border-r border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
        <div className="sticky top-24 p-4 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <ProductLinks
            groupedProducts={groupedProducts}
            currentSlug={currentSlug}
            locale={locale}
          />
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        {children}
      </main>
    </div>
  );
}
