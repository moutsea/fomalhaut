import Header from "@/components/header";
import BackgroundElements from "@/components/background-elements";
import { ProductsSidebarLayout } from "@/components/products-sidebar-layout";

interface ProductItem {
  slug: string;
  title: string;
  category: "education" | "ai-tools";
}

export const dynamic = 'force-static';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // We can manually construct the product list based on the known keys
  // or fetch from translation if structured nicely.
  // The translation `items` array doesn't have slugs explicitly, but we can map them.
  // Let's hardcode the structure to match the keys in `en.json` items order or mapping.
  // Items in json: [CS61B, Claude IDE, Code I, Code By AI]
  
  const products: ProductItem[] = [
    { slug: "cs61b-beyond", title: "CS61B & Beyond", category: "education" },
    { slug: "code-by-ai", title: "Code By AI", category: "ai-tools" },
    { slug: "claude-ide", title: "Claude IDE", category: "ai-tools" },
    { slug: "code-i", title: "Code I", category: "ai-tools" },
  ];

  return (
    <div className="relative min-h-screen bg-background dark:bg-[#030014]">
      <BackgroundElements variant="home" />
      <Header />
      <div className="pt-16"> {/* Add padding for fixed header */}
         <ProductsSidebarLayout products={products}>
            {children}
         </ProductsSidebarLayout>
      </div>
    </div>
  );
}
