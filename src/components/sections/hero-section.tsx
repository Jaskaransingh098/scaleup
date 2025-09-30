"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  // Keyframes for custom animations to match the glowing effect, as requested.
  const animationStyles = `
    @keyframes pulse-glow {
      0%, 100% { opacity: 0.7; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <section id="home" className="relative w-full h-[1400px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://framerusercontent.com/images/xdaPXOEtPIASFiIeYk976HyJA.svg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="Starry background"
          />
        </div>

        {/* Dark gradient fade at bottom */}
        <div
          className="absolute inset-x-0 bottom-0 h-full z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #0a1a2b 0%, rgba(10,26,43,0.8) 30%, transparent 60%)",
          }}
        />

        {/* Left glow */}
        <div
          className="absolute -top-1/4 -left-1/4 w-[853px] h-[730px] z-[1] pointer-events-none"
          style={{ animation: "pulse-glow 8s ease-in-out infinite" }}
        >
          <Image
            src="https://framerusercontent.com/images/UKLIsmbXPgsNWAAoMY12jQuP2ZI.svg"
            layout="fill"
            alt="Left side glow"
          />
        </div>

        {/* Right glow */}
        <div
          className="absolute -top-1/4 -right-1/4 w-[804px] h-[730px] z-[1] pointer-events-none"
          style={{ animation: "pulse-glow 10s ease-in-out infinite 2s" }}
        >
          <Image
            src="https://framerusercontent.com/images/NTKgB6h2Q6llqcAO5km5305uDk0.svg"
            layout="fill"
            alt="Right side glow"
          />
        </div>

        {/* Content */}
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <div className="pt-70 flex flex-col items-center gap-6">
            <div className="inline-block px-4 py-2 text-sm font-medium border rounded-full text-text-accent bg-card/50 border-border backdrop-blur-[2px]">
              For Agencies, Coaches & Software Companies
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-text-primary leading-tight tracking-[-0.02em] max-w-5xl">
              We will add 10–20 qualified sales calls <br />
              to your business every month with our Done-For-You <br />
              <span className="inline-flex items-center justify-center flex-wrap gap-x-3 gap-y-2 mt-4">
                <Image
                  src="https://framerusercontent.com/images/JIdFmDjb13Bd3Q9MGRPlBgWOjHg.png"
                  alt="YouTube icon"
                  width={64}
                  height={64}
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 inline-block"
                />
                <span className="bg-gradient-to-r from-primary to-light-blue bg-clip-text text-transparent">
                  YouTube Sales Engine
                </span>
                in 90 days
              </span>
            </h1>

            <p className="text-xl italic text-text-secondary">
              (Or You Don’t Pay)
            </p>

            <p className="max-w-2xl text-lg text-text-accent">
              Get more leads without sending 1000s cold emails/day, spending a
              dime on paid ads, or creating boring content
            </p>

            {/* Play Section Overlapping Background */}
            <div className="relative w-full max-w-4xl mx-auto pt-34 border shadow-2xl group aspect-video rounded-3xl bg-card/30 backdrop-blur-sm border-border shadow-black/20 z-20">
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-3xl">
                <div className="flex items-center justify-center w-20 h-20 transition-transform duration-300 rounded-full bg-black/50 group-hover:scale-110">
                  <Play className="w-10 h-10 text-white fill-white rounded-3xl" />
                </div>
              </div>
            </div>

            {/* CTA below video (now pushed down because of overlap) */}
            <Link
              href="#contact"
              className="inline-block px-8 py-4 text-base font-medium text-primary-foreground bg-gradient-to-r from-primary to-light-blue rounded-xl shadow-[0_4px_20px_rgba(66,133,244,0.4)] hover:shadow-[0_6px_25px_rgba(66,133,244,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Apply To Work With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
