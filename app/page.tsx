import Comparison from "@/components/Comparison";
import Deliverables from "@/components/Deliverables";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Method from "@/components/Method";
import { Services } from "@/components/Services";
import { TrustedBy } from "@/components/TrustedBy";
import { WhatsAppProcess } from "@/components/WhatsAppProcess";
import WorkingMethod from "@/components/WorkingMethod";
import WhyUpScale from "@/components/WhyUpScale";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Header />
      <main>
        <Hero />
        <WhatsAppProcess />
        <TrustedBy />
        <Services />
        <Method />
        <WorkingMethod />
        <Deliverables />
        <WhyUpScale />
        <Comparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
