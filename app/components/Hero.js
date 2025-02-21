"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Geder() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Hero Section */}
      <section className="text-center my-12">
        <h2 className="text-3xl font-bold text-gray-800">
          {t.rich("subtitle", {
            highlight: (chunks) => <span className="text-pink-600">{chunks}</span>,
          })}
        </h2>
        <p className="text-gray-600 mt-2">{t("quote")}</p>
        <div className="mt-4 bg-pink-100 text-pink-700 px-4 py-2 rounded-lg inline-flex items-center">
          <span>{t("free_registration")}</span>
          <strong className="ml-2">0774545864</strong>
        </div>
      </section>

      {/* Services */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(t.raw("services") || {}).map(([key, value]) => (
          <div key={key} className="bg-white shadow-lg p-4 rounded-lg text-center">
            {value}
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="mt-10 bg-white shadow-lg p-6 rounded-lg text-center w-full max-w-lg">
        <h3 className="text-xl font-semibold">{t("contact.title")}</h3>
        <p className="text-gray-600">{t("contact.subtitle")}</p>

        <div className="mt-4">
          <p>{t("contact.phone_1")}</p>
          <Link href="tel:+0774545864" className="text-blue-600 underline">
            {t("contact.call_1")}
          </Link>
        </div>

        <div className="mt-2">
          <p>{t("contact.phone_2")}</p>
          <Link href="tel:+0774545864" className="text-blue-600 underline">
            {t("contact.call_2")}
          </Link>
        </div>

        <div className="mt-2">
          <p>{t("contact.address")}</p>
          <Link href="https://maps.google.com" target="_blank" className="text-blue-600 underline">
            {t("contact.open_map")}
          </Link>
        </div>

        <div className="mt-2">
          <p>{t("contact.email")}</p>
          <Link href="mailto:info@example.com" className="text-blue-600 underline">
            {t("contact.send")}
          </Link>
        </div>
      </section>
    </div>
  );
}
