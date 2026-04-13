"use client";

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Divider } from "@/components/Divider";
import { Marquee } from "@/components/Marquee";
import { Problem } from "@/components/Problem";
import { Promise } from "@/components/Promise";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollRevealProvider } from "@/components/ScrollRevealProvider";

export default function Home() {
  return (
    <ScrollRevealProvider>
      <Nav />
      <main>
        <Hero />
        <Divider />
        <Marquee />
        <Problem />
        <Promise />
        <Services />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </ScrollRevealProvider>
  );
}
