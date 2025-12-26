"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { LocaleToggle } from "@/components/locale/toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface NavigationItem {
  key: string;
  href: string;
}

export default function Header() {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const locale = useLocale();

  const navigationItems: NavigationItem[] = [
    { key: "home", href: locale === 'en' ? '/' : `/${locale}` },
    { key: "about", href: locale === 'en' ? '/about' : `/${locale}/about` },
    { key: "products", href: locale === 'en' ? '/products' : `/${locale}/products` },
    { key: "team", href: locale === 'en' ? '/#team' : `/${locale}#team` },
  ];

  const isActive = (href: string) => {
    // Normalize pathname by removing locale prefix for comparison
    const normalizedPathname = pathname.replace(new RegExp(`^/${locale}`), '') || '/';
    const normalizedHref = href.replace(new RegExp(`^/${locale}`), '') || '/';

    if (normalizedHref === '/') {
      return normalizedPathname === '/';
    }
    // For other pages, use exact match
    return normalizedPathname === normalizedHref;
  };

  const Logo = () => (
    <Link
      href={locale === 'en' ? '/' : `/${locale}`}
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center overflow-hidden">
        <Image src="/logo.png" width={40} height={40} alt="Fomalhaut Labs Logo" />
      </div>
      <span className="text-xl font-bold text-foreground ml-2">
        Fomalhaut Labs
      </span>
    </Link>
  );

  const NavigationLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={mobile ? "flex flex-col gap-4" : "flex items-center gap-6"}>
      {navigationItems.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          className={cn(
            "font-medium transition-colors duration-200",
            mobile
              ? "text-lg px-4 py-2 rounded-lg hover:bg-muted"
              : "text-muted-foreground hover:text-foreground",
            isActive(item.href) &&
            (mobile
              ? "bg-primary text-primary-foreground"
              : "text-primary font-semibold")
          )}
        >
          {t(item.key)}
        </Link>
      ))}
    </div>
  );

  return (
    <header className="fixed top-0 z-50 w-full border-0 bg-[#faf9f5]/85 dark:bg-background/85 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end flex-1">
          <nav className="mr-4">
            <NavigationLinks />
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-4">
            <LocaleToggle />
            <ThemeToggle />
          </div>
        </div>


        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-6 py-6">
                <nav>
                  <NavigationLinks mobile />
                </nav>

                <div className="border-t pt-6">
                  <div className="flex flex-col gap-4">
                    <div className="text-center text-sm text-muted-foreground">
                      <p>{t("language")} {t("current")}</p>
                      <p className="font-medium">
                        {locale === "en" ? "English" :
                          locale === "zh" ? "中文" :
                            locale === "fr" ? "Français" : locale}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}