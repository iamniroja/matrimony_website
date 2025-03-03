"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-lg px-6 md:px-20 py-2 md:py-4 flex justify-between items-center relative">
      <div className="flex items-center">
        <Image src="/assets/heart.png" alt="Heart Icon" width={40} height={40} />
        <h1 className="ml-2 text-lg md:text-2xl font-extrabold text-gray-600">{t("title")}</h1>
      </div>

      {/* Desktop Language Switcher */}
      <div className="hidden md:flex flex-1 justify-center">
        <div className="flex items-center space-x-8">
          <button
            onClick={() => router.push("/en")}
            className={`cursor-pointer font-medium ${pathname.startsWith("/en") ? "text-pink-500" : "text-gray-600"}`}
          >
            English
          </button>
          <button
            onClick={() => router.push("/ta")}
            className={`cursor-pointer font-medium ${pathname.startsWith("/ta") ? "text-pink-500" : "text-gray-600"}`}
          >
            தமிழ்
          </button>
        </div>
      </div>

      {/* Register Button (Desktop) */}
      <div className="hidden md:block">
        <Link href="/register">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-pink-300 hover:bg-pink-600 transition w-full md:w-auto">
            {t("register_now")}
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} className="text-gray-600" /> : <Menu size={28} className="text-gray-600" />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center space-y-4 py-4 md:hidden">
          <button
            onClick={() => {
              router.push("/en");
              setIsOpen(false);
            }}
            className={`cursor-pointer font-medium ${pathname.startsWith("/en") ? "text-pink-500" : "text-gray-600"}`}
          >
            English
          </button>
          <button
            onClick={() => {
              router.push("/ta");
              setIsOpen(false);
            }}
            className={`cursor-pointer font-medium ${pathname.startsWith("/ta") ? "text-pink-500" : "text-gray-600"}`}
          >
            தமிழ்
          </button>
          <Link href="/register">
            <button
              onClick={() => setIsOpen(false)}
              className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-pink-300 hover:bg-pink-600 transition"
            >
              {t("register_now")}
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;