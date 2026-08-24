"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import CertificationsSection from "@/components/certifications-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

const LoadingScreen = dynamic(() => import("@/components/loading-screen"), {
  ssr: false,
});
const CursorGlow = dynamic(() => import("@/components/cursor-glow"), {
  ssr: false,
});
const SmoothScroll = dynamic(() => import("@/components/smooth-scroll"), {
  ssr: false,
});
const ScrollStory = dynamic(() => import("@/components/scroll-story"), {
  ssr: false,
});

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ScrollStory />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
