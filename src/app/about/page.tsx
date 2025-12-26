import AboutPageContent from "@/app/[locale]/about/page";
import EnglishWrapper from "@/components/providers/english-wrapper";
import { setRequestLocale } from "next-intl/server";

export default function AboutPage() {
  setRequestLocale('en');
  return (
    <EnglishWrapper>
      <AboutPageContent params={Promise.resolve({ locale: 'en' })} />
    </EnglishWrapper>
  );
}