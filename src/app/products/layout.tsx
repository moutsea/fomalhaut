import Header from "@/components/header";
import Footer from "@/components/footer";
import BackgroundElements from "@/components/background-elements";
import { ProductsSidebarLayout } from "@/components/products-sidebar-layout";
import EnglishWrapper from "@/components/providers/english-wrapper";
import { setRequestLocale } from "next-intl/server";

interface ProductItem {
  slug: string;
  title: string;
  category: "education" | "ai-tools";
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  setRequestLocale('en');
  
  const products: ProductItem[] = [
    { slug: "cs61b-beyond", title: "CS61B & Beyond", category: "education" },
    { slug: "code-by-ai", title: "Code By AI", category: "ai-tools" },
    { slug: "claude-ide", title: "Claude IDE", category: "ai-tools" },
    { slug: "code-i", title: "Code I", category: "ai-tools" },
  ];

  return (
    <div className="relative min-h-screen bg-background dark:bg-[#030014]">
      <BackgroundElements variant="home" />
      <EnglishWrapper>
        <Header />
        <div className="pt-16">
            <ProductsSidebarLayout products={products}>
                {children}
            </ProductsSidebarLayout>
        </div>
        {/* Footer is removed for products layout per previous request */}
      </EnglishWrapper>
    </div>
  );
}
