import ProductsPageContent from "@/app/[locale]/products/page";

export default function ProductsPage() {
  return <ProductsPageContent params={Promise.resolve({ locale: 'en' })} />;
}