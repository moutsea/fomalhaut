import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQClientProps {
  faqData: FAQItem[];
}

export default function FAQClient({ faqData }: FAQClientProps) {

  return (
    <div suppressHydrationWarning={true}>
      <Accordion
        type="single"
        collapsible
        className="space-y-4"
      >
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-0 rounded-2xl bg-gray-50/50 dark:bg-slate-900/50 px-6"
        >
          <AccordionTrigger className="py-6 text-lg font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-left">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
      </Accordion>
    </div>
  );
}