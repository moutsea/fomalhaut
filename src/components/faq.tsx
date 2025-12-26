import { getTranslations } from "next-intl/server";
import { HelpCircle } from "lucide-react";
import FAQClient from "./faq-client";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

export default async function FAQ() {
  const t = await getTranslations("faq");
  const rawItems = t.raw("items");
  const faqData: FAQItem[] = Array.isArray(rawItems) ? (rawItems as FAQItem[]) : [];

  if (faqData.length === 0) {
      return null;
  }

  return (
    <section className="py-24 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Header & Support */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                {t("title")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {t("subtitle")}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {t("moreQuestions")}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
              </p>
              <Link 
                href="mailto:cfjwlchangji@gmail.com?subject=Question about Code By AI"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-medium border border-gray-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all shadow-sm hover:shadow-md"
              >
                {t("contactSupport")}
              </Link>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-8">
            <div className="max-w-3xl" suppressHydrationWarning>
              <FAQClient faqData={faqData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}