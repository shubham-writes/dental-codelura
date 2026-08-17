import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveExperiences from "@/components/InteractiveExperiences";
import WorkShowcase from "@/components/WorkShowcase";
import Process from "@/components/Process";
import ChatbotDemo from "@/components/ChatbotDemo";
import TrustStrip from "@/components/TrustStrip";
import ContactSection from "@/components/ContactSection";

import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InteractiveExperiences />
      <ChatbotDemo />
      <WorkShowcase />
      <Process />
      <TrustStrip />
      <ContactSection />
      <BackToTopButton bgColor="#D9B665" color="#05050a" />
    </main>
  );
}
