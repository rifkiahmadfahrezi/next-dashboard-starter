import Hero from "@/components/landing/hero";
import WhySection from "@/components/landing/why-section";

import type { Metadata } from "next";

export const metadata : Metadata = {
  title: 'Home'
}

export default function Home() {
  return (
    <>
      <main className="container mx-auto px-3">
        <Hero />
        <WhySection />
      </main>
    </>
  );
}
