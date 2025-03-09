import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SubHero from "./components/SubHero";
import StepSection from "./components/StepSection";
import Pricing from "./components/Pricing";

interface PriceProps {
  id: string;
  title: string;
  description: string;
  price: number;
}

async function getPlan(): Promise<PriceProps[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pricing`);
  return res.json();
}

export default async function Home() {
  const plan = await getPlan();
  return (
    <div className="p-8">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via bg-blue-800 to-gray-500 rounded-4xl h-[50px]">
        <Navbar />
        <Hero />
      </div>
      <SubHero />
      <StepSection />
      <Pricing item={plan} />
    </div>
  );
}
