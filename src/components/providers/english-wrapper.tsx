import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function EnglishWrapper({ children }: { children: React.ReactNode }) {
  const messages = await getMessages({ locale: 'en' });
  return (
    <NextIntlClientProvider locale="en" messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
