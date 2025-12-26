import ProductDetailPageContent from "@/app/[locale]/products/[slug]/page";

const slugMap: Record<string, number> = {
  "cs61b-beyond": 0,
  "code-by-ai": 1,
  "claude-ide": 2,
  "code-i": 3,
};

export function generateStaticParams() {
  return Object.keys(slugMap).map((slug) => ({ slug }));
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const contentParams = Promise.resolve({
    locale: 'en',
    slug: slug
  });
  
  return <ProductDetailPageContent params={contentParams} />;
}