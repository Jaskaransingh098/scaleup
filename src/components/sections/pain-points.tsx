import Image from "next/image";
import { BarChart3, CalendarClock, Frown } from "lucide-react";

interface PainPoint {
  icon: React.ElementType;
  title: string;
  description: string;
}

const painPointsData: PainPoint[] = [
  {
    icon: BarChart3,
    title: "Struggling to Generate Leads Consistently?",
    description:
      "In 2025, people buy from people. We help you attract qualified leads with content that builds trust and converts.",
  },
  {
    icon: CalendarClock,
    title: "No Time to Script & Edit?",
    description:
      "You shoot, we do the rest. We build and run your content engine — strategy, scripting, editing, and publishing — done for you.",
  },
  {
    icon: Frown,
    title: "Too many Unqualified Leads?",
    description:
      "Attract the right prospects and book better calls with content that filters out your time wasters.",
  },
];

const PainPoints = () => {
  return (
    <section className="py-30 bg-transparent text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight md:leading-[56px]">
            Does This <span className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent font-bold">Sound Like You?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPointsData.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="relative bg-card border border-border rounded-3xl p-8 overflow-hidden h-full"
              >
                {/* <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/WcrHWFTN7cBpOOCJ3uhVkpsJXQ-4.svg?"
                  alt="Card background pattern"
                  width={378}
                  height={237}
                  className="absolute top-0 left-0 w-full h-auto object-cover pointer-events-none mix-blend-plus-lighter"
                /> */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-purple-700" />
                <div className="relative z-10 flex flex-col items-start gap-6 h-full">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-purple-600" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold text-text-primary leading-7">
                      {point.title}
                    </h3>
                    <p className="text-text-secondary text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;