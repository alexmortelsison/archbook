import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SubHero from "./components/SubHero";
import StepSection from "./components/StepSection";

export default function Home() {
  return (
    <div className="p-8">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via bg-blue-800 to-gray-500 rounded-4xl h-[50px]">
        <Navbar />
        <Hero />
      </div>
      <SubHero />
      <StepSection />
    </div>
  );
}
