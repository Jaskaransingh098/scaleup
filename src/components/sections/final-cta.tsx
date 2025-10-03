import React from "react";
import Image from "next/image";
import Link from "next/link";

const features = [
  { text: "24/7 support" },
  { text: "Unlimited funnel" },
  { text: "Youtube Management" },
];

const FinalCtaSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full py-[120px] bg-transparent text-foreground overflow-x-clip"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className="inline-block bg-black/30 backdrop-blur-2xl border border-white/30 
  rounded-full shadow-lg px-6 py-4 mx-auto"
        >
          <h1 className="text-[50px] font-semibold leading-[60px] text-text-primary text-center whitespace-nowrap">
            Stop posting.
          </h1>
          <h1 className="text-[50px] font-semibold leading-[60px] text-center whitespace-nowrap">
            <span className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent font-bold">
              Start selling.
            </span>
          </h1>
        </div>

        <div className="mt-[50px] max-w-3xl mx-auto">
          <div className="relative p-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[20px]">
            <div className="bg-card rounded-[19px] p-10 flex flex-col items-center">
              <h2 className="text-[40px] font-semibold leading-[48px] text-text-primary text-center">
                Get your free strategy audit now!
              </h2>
              <p className="mt-2.5 text-base text-secondary-foreground text-center">
                And see how The Social Selling System™ can fill your calendar
                in 111 days.
              </p>

              {/* <div className="mt-10 flex justify-center items-center gap-10 flex-wrap">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 flex-shrink-0">
                      <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/kWedhcFiMFVAegynh5rxadiQA0-21.svg?"
                        alt="Tick icon"
                        width={24}
                        height={24}
                      />
                    </div>
                    <p className="text-lg text-secondary-foreground whitespace-nowrap">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div> */}

              <div className="relative mt-10 w-fit mx-auto">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/eVPQSYBoVqwchmpN78sjyYtovY-23.svg?"
                  alt="Grid pattern"
                  width={177}
                  height={59}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
                />
                <Link
                  href="#contact"
                  className="relative z-10 inline-block py-4 px-8 text-lg font-semibold text-white bg-gradient-to-b from-primary to-[#3c78da] rounded-xl shadow-[0_10px_30px_0_rgba(66,133,244,0.3)] transition-transform hover:-translate-y-0.5"
                >
                  Claim Your Free Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
