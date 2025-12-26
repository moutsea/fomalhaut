import Header from "@/components/header";
import Footer from "@/components/footer";
import TeamSection from "@/components/team-section";
import Timeline from "@/components/timeline";
import BackgroundElements from "@/components/background-elements";
import ContactUs from "@/components/contact-us";
import { Target, Lightbulb, History, Users } from "lucide-react";
import { getMessagesStatic } from "@/lib/messages";

export const dynamic = 'force-static';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const messages = getMessagesStatic(locale);
  const t = messages.about;

  return (
    <div className="relative min-h-screen">
       <BackgroundElements variant="about" />

      <Header />

      <main className="pt-24 pb-24">
        {/* About Hero */}
        <section className="px-4 sm:px-6 lg:px-8 text-center mb-24">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </section>

        {/* Mission & Vision Cards */}
        <section className="px-4 sm:px-6 lg:px-8 mb-24">
          <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.mission.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.mission.description}
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200/50 dark:border-white/10 shadow-xl hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.vision.title}</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {t.vision.description}
              </p>
            </div>
          </div>
        </section>

        {/* History / Story */}
        <section className="px-4 sm:px-6 lg:px-8 mb-24">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/10 text-pink-500 mb-6">
              <History className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t.history.title}</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              {t.history.description}
            </p>
          </div>
        </section>

        {/* Timeline Component Reuse */}
        <Timeline />

        {/* Team Section Component Reuse */}
        <div className="mt-12 mb-24">
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-6">
                    <Users className="w-4 h-4" />
                    <span>{t.founders.title}</span>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {t.founders.description}
                </p>
            </div>
            <TeamSection />
        </div>

        <ContactUs />

      </main>

      <Footer />
    </div>
  );
}
