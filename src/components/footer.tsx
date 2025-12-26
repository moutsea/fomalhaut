import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-white">Fomalhaut Labs</h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              {t("description")}
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://github.com/moutsea"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://x.com/LiangMout95522"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:cfjwlchangji@gmail.com"
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("product.title")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="https://cs61bbeyond.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  {t("product.cs61b")}
                </Link>
              </li>
              <li>
                <Link href="https://claudeide.net" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  {t("product.claudeIde")}
                </Link>
              </li>
              <li>
                <Link href="https://codeilab.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  {t("product.codei")}
                </Link>
              </li>
              <li>
                <Link href="https://codebyai.net" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  {t("product.codebyai")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {t("company.title")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href={`/${locale}/#team`} className="text-gray-400 hover:text-white transition-colors">
                  {t("company.team")}
                </Link>
              </li>
              <li>
                <Link href="mailto:cfjwlchangji@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  {t("company.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {t("copyright")}. {t("allRightsReserved")}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href={`/${locale}/privacy`}
                className="text-gray-500 hover:text-white transition-colors"
              >
                {t("privacy")}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="text-gray-500 hover:text-white transition-colors"
              >
                {t("terms")}
              </Link>
              <Link
                href={`/${locale}/cookies`}
                className="text-gray-500 hover:text-white transition-colors"
              >
                {t("cookies")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}