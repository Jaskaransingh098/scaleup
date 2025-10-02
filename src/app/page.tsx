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
import Problem from "@/components/sections/problem";
import StarfieldBackground from "../components/ui/StartfieldBackground";
import RippleGrid from "@/components/ui/RippleGrid";
import Squares from "@/components/ui/Squares";

export default function HomePage() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        background: "linear-gradient(to bottom, #833ab4, #fd1d1d, #fcb045)",
      }}
    >
      {/* Background image */}
      {/* <div className="absolute inset-0 bg-[url('/bg-new2.png')] bg-no-repeat bg-center bg-fixed bg-cover z-0" /> */}
      {/* <div className="fixed inset-0 z-[5]" style={{ opacity: 0.3 }}>
        <Squares
          speed={0.2}
          squareSize={120}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div> */}
      {/* <StarfieldBackground /> */}
      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20">
        <HeaderNavigation />

        <main className="pt-[0px]">
          <HeroSection />

          <div>
            <StatsSection />
          </div>

          <div>
            <Problem />
          </div>

          <div className="">
            <PainPoints />
          </div>
          
          <div>
            <CaseStudiesHeader />
          </div>

          <div id="results" className="scroll-mt-[110px]">
            <ResultsShowcase />
          </div>

          <div id="process" className="scroll-mt-[110px]">
            <ProcessSection />
          </div>

          {/* <div>
            <TestimonialsSection />
          </div> */}

          <div>
            <div id="portfolio" className="scroll-mt-[110px]">
              <VideoExamples />
            </div>
          </div>

          <div>
            <FoundersSection />
          </div>

          <div>
            <div id="faq" className="scroll-mt-[110px]">
              <FaqSection />
            </div>
          </div>

          <div>
            <div id="contact" className="scroll-mt-[110px]">
              <FinalCtaSection />
            </div>
          </div>
          <div>
            <div id="contact" className="scroll-mt-[110px]">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
