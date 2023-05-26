"use client";

import Header from "@/components/Header";
import HeroPage from "../components/HeroPage";
import StatsInfo from "@/components/StatsInfo";
import GetStarted from "@/components/GetStarted";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [links, setLinks] = useState<
    Array<{ longLink: string; shortLink: string }>
  >([]);

  console.log(links);

  return (
    <main>
      <Header />
      <HeroPage setLinks={setLinks} />
      <StatsInfo links={links} />
      <GetStarted />
      <Footer />
    </main>
  );
}
