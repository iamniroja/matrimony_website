"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const t = useTranslations();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <header className="w-full flex justify-between items-center bg-white p-4 shadow-md">
        <h1 className="text-xl font-bold text-pink-600">{t("title")}</h1>
        
        {/* Language Switcher */}
        <div>
          <button
            onClick={() => router.push("/en")}
            className="mr-2 px-4 py-2 border rounded-md hover:bg-gray-200 transition"
          >
            English
          </button>
          <button
            onClick={() => router.push("/ta")}
            className="px-4 py-2 border rounded-md hover:bg-gray-200 transition"
          >
            தமிழ்
          </button>
        </div>

        {/* Register Button */}
        <Link href="/register" className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition">
          {t("register_now")}
        </Link>
      </header>
    </div>
  );
}
