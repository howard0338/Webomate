import { Hero } from "@/components/home/Hero";
import { Cases } from "@/components/home/Cases";
import { LineCta } from "@/components/home/LineCta";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Pricing } from "@/components/home/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Cases />
      <LineCta />
      <Features />
      <HowItWorks />
      <Pricing />
    </>
  );
}
