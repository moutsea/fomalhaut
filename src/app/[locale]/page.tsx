import HeroSection from "@/components/hero-section";
import Timeline from "@/components/timeline";
import ProductFeature from "@/components/product-feature";
import TeamSection from "@/components/team-section";
import UserComments from "@/components/user-comments";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackgroundElements from "@/components/background-elements";
import ContactUs from "@/components/contact-us";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getMessagesStatic } from "@/lib/messages";

export const dynamic = 'force-static';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
    const { locale } = await params;
    const messages = getMessagesStatic(locale);
    const t = messages.products;

    return (
        <div className="relative min-h-screen">
            <BackgroundElements variant="home" />

            <Header />
            
            <main className="flex flex-col gap-24 pb-24 pt-16">
                {/* Hero Section */}
                <HeroSection />

                {/* Timeline Section */}
                <Timeline />

                {/* Products */}
                <section id="products" className="scroll-mt-24">
                    <ProductFeature />
                    <div className="flex justify-center mt-8">
                        <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-indigo-200 dark:border-white/10 hover:bg-indigo-50 dark:hover:bg-white/5 text-indigo-600 dark:text-indigo-400 font-semibold transition-all">
                            <Link href={locale === 'en' ? '/products' : `/${locale}/products`}>
                                {t.viewAll}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </section>

                {/* Team */}
                <section id="team" className="scroll-mt-24">
                    <TeamSection />
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-24">
                    <UserComments />
                </section>

                {/* Contact Us */}
                <ContactUs />
            </main>

            <Footer />
        </div>
    );
}