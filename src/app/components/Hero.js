"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row justify-center p-20 space-y-6 md:space-y-0 md:space-x-10">
      {/* Left Content */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-3 max-w-lg">
        <h2 className="text-2xl  md:text-3xl text-gray-800 leading-tight flex items-center space-x-2">
          <span>{t("subtitle")}</span>
          <Image src="/assets/Vector.png" alt="Vector Icon" width={20} height={20} />
        </h2>
        <h2 className="text-2xl md:text-3xl leading-tight font-bold text-gray-800">
          {t("sub_subtitle")}
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          {t("quote")}
        </p>
        <p className="text-gray-600 text-sm md:text-base">
          {t("quote_1")}
        </p>
        <div className="flex items-center bg-white shadow-lg rounded-xl p-4 space-x-4 max-w-xs">
          <div className="flex flex-col">
            <span className="text-gray-800 text-m">
              {t("free_registration")}
              <br />
              {t("call_now")}
              <strong className="ml-2">0774545864</strong>
            </span>
          </div>
          <div className="bg-pink-500 p-3 rounded-xl flex items-center justify-center">
            <Image src="/assets/Call.png" alt="Call Icon" width={20} height={20} />
          </div>
        </div>

        {/* Services Grid moved here */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-6 text-gray-700 mt-6">
          {Object.entries(t.raw("services") || {}).map(([key, value]) => (
            <div key={key} className="flex items-center space-x-3">
               <div className="bg-white p-2 rounded-lg shadow-md flex items-center justify-center">
                <Image
                  src={value.image}
                  alt={value.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span>{value.name}</span>
             
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full max-w-md md:max-w-lg">
        <div className="relative">
          <Image
            src="/assets/couple.png"
            alt="Couple"
            width={2000}
            height={2000}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 to-transparent"></div>
      </div>
    
{/* Contact */}
     {/* <section className="mt-10 bg-white shadow-lg p-6 rounded-lg text-center w-full max-w-lg">
        <h3 className="text-xl font-semibold">{t("contact.title")}</h3>
        <p className="text-gray-600">{t("contact.subtitle")}</p>

        <div className="mt-4 flex items-center space-x-3">
  <div className="bg-gray-200 p-3 rounded-xl flex items-center justify-center">
    <Image src={t("contact.phone_1.image")} alt="Phone icon" width={24} height={24} className="object-contain" />
  </div>
  <div className="flex flex-col">
    <p className="text-gray-700 text-sm">{t("contact.phone_1.text")}</p>
    <Link href={t("contact.phone_1.link")} className="text-blue-600 underline">
      {t("contact.phone_1.action")}
    </Link>
  </div>
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
      </section>*/}
    </div>
  );
}
