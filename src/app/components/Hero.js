"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const Hero = ()=> {
  const t = useTranslations();

  return (
    <div className="bg-gray-100 m-h-screen w-auto flex flex-col md:flex-row justify-between px-6 md:px-20 py-6 md:py-6 space-y-6 md:space-y-0 md:space-x-10">

      {/* Left Content */}
     
 
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-3 max-w-lg">
        <h2 className="text-3xl  md:text-3xl text-gray-800 leading-tight flex items-center space-x-2">
          <span>{t("subtitle")}</span>
          <Image src="/assets/Vector.png" alt="Vector Icon" width={20} height={20} />
        </h2>
        <h2 className="text-3xl md:text-3xl leading-tight font-extrabold text-gray-800">
  {t("sub_subtitle")}
</h2>
<div className="text-gray-600 text-s md:text-base space-y-0">
  <p>{t("quote")}</p>
  <p>{t("quote_1")}</p>
</div>

        <div className="flex items-center bg-white shadow-lg rounded-xl mt-8 p-4 space-x-4 max-w-xs">
          <div className="flex flex-col">
            <span className="text-gray-800 text-m">
              {t("free_registration")}
              <br />
              {t("call_now")}
              <strong className="ml-2">0774545864</strong>
            </span>
          </div>
          <div className=" bg-pink-500 p-3  rounded-xl flex items-center justify-center">
            <Image src="/assets/Call.png" alt="Call Icon" width={20} height={20} />
          </div>
        </div>


{/* Services Grid */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6  text-gray-700 mt-14">
  {Object.entries(t.raw("services") || {}).map(([key, value]) => (
    <div key={key} className="flex items-center space-x-3">
      {/* Icon Container */}
      <div className=" absolute p-3 space-between-8 bg-white w-12 h-12 rounded-lg shadow-md flex items-center justify-center">
        <Image
          src={value.image}
          alt={value.name}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      {/* Service Name on the Right (Full Width) */}
      <span className=" text-base text-gray-800 leading-tight max-w-[200px] ml-16">{value.name}</span>
    </div>
  ))}
</div>

      




        
        
      </div>

      {/* Right Image */}
      
      <div className="relative max-w-md md:max-w-lg flex flex-col items-end  ml-3 space-y-6">
        <div className="relative">
          <Image src="/assets/couple.png"
           alt="Couple" 
           width={3000}
            height={3000}
             priority 
             />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 to-transparent"></div>
        </div>

        {/* Contact Section */}
        <div className="bg-white shadow-lg rounded-2xl p-4 w-[320px] space-y-2 relative  -mt-20">
          <h3 className="text-sm font-semibold text-gray-800">{t("contact.title")}</h3>
          <p className="text-gray-500 text-xs">{t("contact.subtitle")}</p>
          {['phone_1', 'phone_2', 'address', 'email'].map((key) => (
            <div key={key} className="mt-4 flex items-center space-x-3">
              <div className="bg-gray-200 p-3 rounded-xl flex items-center justify-center">
                <Image src={t(`contact.${key}.image`)} alt="Contact icon" width={24} height={24} className="object-contain" />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-700 text-sm">{t(`contact.${key}.text`)}</p>
                <Link href={t(`contact.${key}.link`)} className="text-pink-500 text-xs font-semibold cursor-pointer">
                  {t(`contact.${key}.action`)}
                </Link>
              </div>
            </div>
          ))}
          </div>
          
     </div>
    
  
     <div className="text-gray-800 text-xs mt-4 ml-4 md:mt-0 md:absolute md:bottom-4 md:left-4 md:ml-16">Design copyrights NAVICODE(PVT)LTD</div>
    </div>
  );
  
}

export default Hero;