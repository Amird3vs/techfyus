import HeroSection from "./sections/Hero";
import TeamSection from "./sections/Team";
import ServiceSection from "./sections/Services";
import ContactSection from "./sections/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="bg-slate-900">
      <HeroSection />
      <TeamSection />
      <ServiceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
