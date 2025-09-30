import HeaderNavigation from "@/components/sections/header-navigation";
import HeroSection from "@/components/sections/hero-section";
import VideoTestimonial from "@/components/sections/video-testimonial";
import StatsSection from "@/components/sections/stats-section";
import CaseStudiesHeader from "@/components/sections/case-studies-header";
import PainPoints from "@/components/sections/pain-points";
import ResultsShowcase from "@/components/sections/results-showcase";
import ProcessSection from "@/components/sections/process-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import VideoExamples from "@/components/sections/video-examples";
import FoundersSection from "@/components/sections/founders-section";
import FaqSection from "@/components/sections/faq-section";
import FinalCtaSection from "@/components/sections/final-cta";
import RevealOnScroll from "@/components/ui/reveal-on-scroll";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/pattern.jpg')] bg-no-repeat bg-center bg-fixed bg-cover z-0" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20">
        <HeaderNavigation />

        <main className="pt-[0px]">
          <HeroSection />

          <RevealOnScroll delay={0.05}>
            <StatsSection />
          </RevealOnScroll>

          <div>
            <CaseStudiesHeader />
          </div>

          <RevealOnScroll delay={0.15}>
            <div className="py-24">
              <PainPoints />
            </div>
          </RevealOnScroll>

          <div id="results" className="scroll-mt-[110px]">
            <ResultsShowcase />
          </div>

          <RevealOnScroll delay={0.25}>
            <div id="process" className="scroll-mt-[110px]">
              <ProcessSection />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.3}>
            <TestimonialsSection />
          </RevealOnScroll>

          <div>
            <div id="portfolio" className="scroll-mt-[110px]">
              <VideoExamples />
            </div>
          </div>

          <RevealOnScroll delay={0.4}>
            <FoundersSection />
          </RevealOnScroll>

          <RevealOnScroll delay={0.45}>
            <div id="faq" className="scroll-mt-[110px]">
              <FaqSection />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.5}>
            <div id="contact" className="scroll-mt-[110px]">
              <FinalCtaSection />
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={0.5}>
            <div id="contact" className="scroll-mt-[110px]">
              <Footer />
            </div>
          </RevealOnScroll>
        </main>
      </div>
    </div>
  );
}
