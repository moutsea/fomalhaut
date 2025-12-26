import enMessages from '@/i18n/messages/en.json';
import zhMessages from '@/i18n/messages/zh.json';
import frMessages from '@/i18n/messages/fr.json';
import koMessages from '@/i18n/messages/ko.json';

const messagesMap = {
  en: enMessages,
  zh: zhMessages,
  fr: frMessages,
  ko: koMessages,
} as const;

export function getMessagesStatic(locale: string) {
  return messagesMap[locale as keyof typeof messagesMap] || enMessages;
}
