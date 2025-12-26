import ProductFeature from "@/components/product-feature";
import { getMessagesStatic } from "@/lib/messages";

export const dynamic = 'force-static';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ProductsPage({ params }: Props) {
  const { locale } = await params;
  const messages = getMessagesStatic(locale);
  const t = messages.productsPage;

  return (
      <div className="px-6 py-12 md:px-12 md:py-16 max-w-4xl mx-auto">
        <section className="mb-16 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            <span className="bg-gradient-to-r from-indigo-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            {t.subtitle}
          </p>
        </section>

        {/* Product List Overview */}
        <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-500 mb-8">
                Select a product from the sidebar to view its details, or browse our collection below.
            </p>
        </div>
        
        <div className="-mx-6">
            <ProductFeature hideTitle={true} />
        </div>
      </div>
  );
}
