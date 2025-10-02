import Image from "next/image";
import { Check } from "lucide-react";

const processSteps = [
  {
    step: "Step 01",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/jJ6toYSKz9DtEMWJDpteC9pF1HM-10.svg?",
    title: "Discovery & Consultation",
    description: [
      "1-on-1 call to understand your goals and niche",
      "Audit your current brand & content presence",
      "Identify bottlenecks in your lead",
      "Align on outcomes & content direction",
    ],
  },
  {
    step: "Step 02",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/AXgyjaoddAArynSnELMK0OyXdTc-11.svg?",
    title: "Tailored Content Strategy",
    description: [
      "Build a personalized content roadmap",
      "Platform-specific strategy (YouTube, Shorts, Reels)",
      "Tone, voice, and audience targeting",
      "Finalize scripts and content calendar",
    ],
  },
  {
    step: "Step 03",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/7YvpqdgJKVCiaafRYxXpuUlwE-12.svg?",
    title: "Content Creation & Distribution",
    description: [
      "Full editing, post-production, and repurposing",
      "Publish across YouTube, Reels, LinkedIn & more",
      "Optimize performance and engagement",
      "Double down on what works with iterations",
    ],
  },
  {
    step: "Step 04",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/JQVOSvT8HSfik1as2hcjm0MO3I-13.svg?",
    title: "Conversion Optimization",
    description: [
      "Set up lead-gen landing pages that convert",
      "Plug in VSLs, webinar funnels, or booking flows",
      "Monitor metrics like CTR and conversion rates",
      "Optimize copy, pages & flow monthly for ROI",
    ],
  },
];

interface ProcessCardProps {
  step: string;
  icon: string;
  title: string;
  description: string[];
}

const ProcessCard = ({ step, icon, title, description }: ProcessCardProps) => {
  return (
    <div className="relative z-20 flex flex-col rounded-3xl border border-border bg-card p-8 overflow-hidden">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/Vy5fY5tvzYvO3kc3PMsfNrzzvDY-8.svg?"
        alt="Card Background"
        layout="fill"
        className="object-cover"
      />
      {/* <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/3Cd1qIpK57EaM3E6bmDPd5xQ4-9.svg?"
        alt=""
        width={40}
        height={40}
        className="absolute top-4 left-4"
      /> */}
      <div className="absolute top-6 right-6 rounded-full bg-primary/10 px-3 py-1">
        <p className="text-sm text-secondary-foreground">{step}</p>
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        
        <div
          className="mt-8 w-10 h-10 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]"
          style={{
            WebkitMaskImage: `url(${icon})`,
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            WebkitMaskSize: "contain",
            maskImage: `url(${icon})`,
            maskRepeat: "no-repeat",
            maskPosition: "center",
            maskSize: "contain",
          }}
        />
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
        <ul className="flex flex-col gap-3">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="mt-1 h-5 w-5 flex-shrink-0 text-success-green" />
              <span className="text-base leading-6 text-secondary-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="relative z-20 bg-transparent py-32 overflow-hidden mt-[150px]"
    >
      {/* <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/pics-bg1.mp4" type="video/mp4" />
      </video> */}

      {/* Overlay to make content readable */}
      <div className="absolute inset-0 bg- rounded-4xl z-10"></div>
      <div className="container relative z-10 flex flex-col items-center gap-6">
        <div className="relative inline-flex items-center justify-center rounded-full border border-[rgba(107,163,255,0.2)]">
          {/* <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/IJB1pgcBugatOTAc7yAHhqLQu0-7.svg?"
            alt="Heading Background"
            layout="fill"
            className="rounded-full object-cover"
          /> */}
          <span className="relative border-2 border-amber-50 rounded-2xl z-10 py-2 px-4 text-base text-secondary-foreground">
            Process
          </span>
        </div>
        <div className=" bg-black/30 backdrop-blur-2xl border border-white/30 
      rounded-full shadow-lg p-4">
        <h2 className="text-center text-[48px] font-semibold leading-[56px] text-foreground max-w-3xl">
          Simple{" "}
          <span className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent font-bold">
            4-step process
          </span>
          <br />
          to make your brand{" "}
          <span className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent font-bold">
            Go Big!
          </span>
        </h2>
        </div>

        <div className="mt-20 grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          {processSteps.map((step) => (
            <ProcessCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
