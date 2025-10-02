"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

const gridItems = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/ffiu56fmdEMHFtkU2atTPpUvXsc-14.png?",
    alt: "YouTube analytics showing 2.5 million views and $12,039.77 estimated revenue.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/UncxnIo8ZmHdIHXmSB0KzttwDA-15.png?",
    alt: "YouTube analytics showing 16.4 million views and 134.9K watch time hours.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/7QqVmAbzNXaKJadQsryszCtEg-17.png?",
    alt: "Testimonial card for VirtualBacon mentioning 16M views in 90 days.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/xIVPEnY1SFFQuH47Ezqb3Ydsw-16.png?",
    alt: "Testimonial card for Nomad Shubham mentioning 2.72M YouTube subscribers.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/0WWGpBhUHW6dPapcOlmBUsFkvsg-18.png?",
    alt: "Chat message testimonial: 'GG on the pinned tweet, would have paid for it. good shit bro'",
    className: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/kAV6W4HT3Y5RBOl6ee4toF7TTHU-19.png?",
    alt: "Chat message testimonial: 'Mathew @ Client. Fantastic, Kunal! Best investment of 2023 so far'",
    className: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/ftkAgoQ77HxmmeW8MbEE7Xp7gI-20.png?",
    alt: "Chat message testimonial: 'You did it without any paid ads man that's insane. I have read the case study too, nd it's pretty amazing'",
    className: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/O7cuhSFraEXkoT7oCd6sjoDdvNM-21.png?",
    alt: "YouTube analytics performance card for a video.",
    className: "lg:row-span-2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/5ZpAimQ1NKiDDgnHoovhLVMoQI-22.png?",
    alt: "YouTube analytics showing revenue and views.",
    className: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/s8oDy3LHN6gnGIqUiv9uzQfeN4Q-23.png?",
    alt: "A series of chat message testimonials about growth and quality.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/Eh5QJe943oR6CENfNYIPHKE6dk-24.png?",
    alt: "YouTube analytics showing 13.2M views and 862.2k watch time.",
    className: "md:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/drakWjPyozKrxjGIO5jDlECM-25.png?",
    alt: "Chat message testimonial: 'These graphics are incre...'",
    className: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/eoeUaDFdXIJU0CB2Sp7eEDZVadY-26.png?",
    alt: "Chat message testimonial with a positive sticker.",
    className: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/NrakcCD5gw9CYTVaAsqr5B4F70-27.png?",
    alt: "YouTube analytics showing 10.4M views and 667.7k subscribers.",
    className: "md:col-span-2 lg:col-span-2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/azCPhfPv5sd9J1ZWXkBwOUHyU-28.png?",
    alt: "Testimonial card for Alex Berman with 5 stars.",
    className: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/1DfJf7A6U9MAzTSQvVCoTEnZg-29.png?",
    alt: "A collage of chat message testimonials expressing excitement.",
    className: "md:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/UqXWsP0e4YzKGeApEC1WE4ujQLA-30.png?",
    alt: "Chat message testimonial: 'I'M LITERALLY IN LOVE YOU GUYS'",
    className: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/jdfOGO8DVmYBN3eOQy8i2XwkhE.png?",
    alt: "YouTube analytics showing 10,111 views.",
    className: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/GWodPwkbehNDeSTIly3boLeU2mE.png?",
    alt: "Testimonial about a video performing very well.",
    className: "",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/IT1l2IuXVke0GmGiiBnQ6eQaWA-8.png?",
    alt: "Testimonial card collage showing thumbnails and positive feedback.",
    className: "md:col-span-2 lg:col-span-4",
  },
];

const ResultsShowcase = () => {
  return (
    <section className="relative isolate z-20 p-10 lg:py-32 w-[93vw] mx-auto rounded-4xl overflow-hidden min-h-[600px]">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/pics-bg1.mp4" type="video/mp4" />
      </video>

      {/* Overlay to make content readable */}
      <div className="absolute inset-0 bg-gray-900 rounded-4xl z-10"></div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-4xl lg:text-[48px] lg:leading-[56px] font-semibold text-white">
            We Actually{" "}
            <span className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent font-bold">
              Get Results
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-6 [grid-auto-flow:dense]">
          {gridItems.map((item, index) => (
            <div key={index} className={item.className}>
              <Image
                src={item.src}
                alt={item.alt}
                width={700}
                height={700}
                unoptimized
                className="w-[80vw] mx-auto h-auto rounded-4xl p-5 border-2 border-white/20 bg-white/0 backdrop-blur-sm shadow-sm"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-20">
          <a
            href="#contact"
            className="inline-block  p-4 text-white bg-white/20 backdrop-blur-2xl 
             border border-white/30 
             rounded-full shadow-lg 
             hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Apply To Work With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;
