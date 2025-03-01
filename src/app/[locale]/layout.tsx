import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import "@/app/globals.css";

export default async function LocaleLayout({
  children,
  params, // Params should be awaited here
}: {
  children: React.ReactNode;
  params: { locale: string }; // Define as string
}) {
  // Ensure `params` is awaited before using it
  const { locale } = await params; // Await params to access locale

  if (!routing.locales.includes(locale as Locale)) {
    console.error(`Invalid locale: ${locale}`);
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children} {/* No <html> or <body> here */}
    </NextIntlClientProvider>
  );
}
