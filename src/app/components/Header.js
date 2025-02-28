"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname(); // Get current path

  return (
    <header className="bg-white shadow-lg px-6 md:px-20 py-4 md:py-6 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/assets/heart.png" alt="Heart Icon" width={40} height={40} />
        <h1 className="ml-2 text-lg md:text-xl font-bold text-gray-600">{t("title")}</h1>
      </div>

      {/* Language Switcher */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex items-center space-x-8">
          <button
            onClick={() => router.push("/en")}
            className={`cursor-pointer font-medium ${
              pathname.startsWith("/en") ? "text-pink-500" : "text-gray-600"
            }`}
          >
            English
          </button>
          <button
            onClick={() => router.push("/ta")}
            className={`cursor-pointer font-medium ${
              pathname.startsWith("/ta") ? "text-pink-500" : "text-gray-600"
            }`}
          >
            தமிழ்
          </button>
        </div>
      </div>

      {/* Register Button */}
      <Link href="/register">
        <button className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-pink-300 hover:bg-pink-600 transition w-full md:w-auto">
          {t("register_now")}
        </button>
      </Link>
    </header>
  );
}
