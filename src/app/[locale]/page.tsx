import "../globals.css";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";

export default function LocaleLayout() {
  return (
    <>
     <html lang="en">  {/* This is wrong */}
        <body>
         
        </body>
      </html>
      <Header />
      <Hero />
    </>
  );
}
