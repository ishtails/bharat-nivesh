import Hero from "@/app/_pages/Hero";
import NavBar from "@/components/NavBar";
import WhatWeDo from "./_pages/WhatWeDo";
import Portfolio from "./_pages/Portfolio";
import Statistics from "@/components/Statistics";
import Leader from "./_pages/Leader";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <section className="xl:h-screen">
        {/* Navbar */}
        <NavBar />

        {/* Hero */}
        <section id="home" className="relative ">
          <div className="absolute blur-[600px] bg-p_orange/40 p-96 -z-10 -left-72 -top-56" />
          <div className="absolute blur-[600px] bg-p_green-500/40 p-96 -z-10 -right-72 -top-56" />
          <Hero />
        </section>
      </section>

      {/* What We Do? */}
      <section id="whatwedo" className="relative">
        <WhatWeDo />
      </section>

      {/* Portfolio */}
      <section id="stats" className="bg-p_green-500 flex justify-center relative mt-20">
        <Statistics />
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="relative">
        <Portfolio />
      </section>

      {/* Founder */}
      <section id="leader" className="relative">
        <Leader />
      </section>
      {/* Footer */}
      <section id="footer" className="relative">
        <Footer />
      </section>
    </main>
  );
}
