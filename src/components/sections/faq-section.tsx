"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqData = [
  {
    question: "How is ScaleUp Media different?",
    answer:
      "We focus on a data-driven approach combining YouTube content strategy with performance marketing to guarantee qualified sales calls. Unlike others, we offer a Done-For-You YouTube Sales Engine with a payment guarantee if we don't meet our targets.",
  },
  {
    question: "How does your pricing work?",
    answer:
      "Our pricing is model-based on a monthly retainer. We also offer performance-based models for certain clients. The investment is tailored to your specific needs and goals, which we determine during our initial strategy call.",
  },
  {
    question: "Will this work for my niche?",
    answer:
      "We specialize in working with Agencies, Coaches, and Software Companies. If your target audience is on YouTube, our strategies can be adapted to work for your niche. We conduct thorough market research to ensure our content resonates with your ideal clients.",
  },
  {
    question: "What if we have never done youtube/Instagram?",
    answer:
      "That's not a problem! We work with clients at all stages of their content journey. Our Done-For-You service handles everything from strategy and scripting to production and publishing, making it easy for you to get started and see results.",
  },
  {
    question: "Will this convert into my sales?",
    answer:
      "Yes. Our entire process is designed to not just generate views, but to attract qualified leads and convert them into sales calls. We build a full-funnel system that nurtures viewers into paying customers.",
  },
  {
    question: "When can I expect results?",
    answer:
      "While some clients see results sooner, we guarantee to add 10-20 qualified sales calls to your business within 90 days. Content marketing is a long-term game, but our system is optimized for speed and ROI.",
  },
  {
    question: "How many hours will I have to put in?",
    answer:
      "Our service is 'Done-For-You' to minimize your time commitment. Your main involvement will be in the initial strategy sessions and providing raw footage or insights for content, which typically requires only a few hours per month.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-[120px] bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="border border-primary/30 rounded-full py-2 px-4 inline-block">
            <p className="text-sm font-semibold text-text-secondary">FAQ’s</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-text-primary leading-tight">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-light-blue bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl">
            Answers to common questions about our services, processes, and what
            sets us apart.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <AccordionTrigger className="group w-full text-left font-medium text-lg text-text-primary p-6 flex justify-between items-center hover:no-underline">
                  {item.question}
                  <div className="w-6 h-6 flex-shrink-0">
                    {/* <Image
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/DT7ew3gD1V7s2jqnBQZM7wEf8-19.svg?"
                      alt="Plus Icon"
                      width={24}
                      height={24}
                      className="transition-transform duration-300 group-data-[state=open]:rotate-45"
                    /> */}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                  <p className="text-base text-text-secondary">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-card rounded-full p-4 pl-6 flex justify-between items-center border border-border">
          <div className="flex items-center gap-4">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/ZjgMIJH0NDQeRncPHoJGwf65M-20.svg?"
              alt="Icon"
              width={32}
              height={32}
            />
            <p className="text-lg font-medium text-text-primary">
              Still Have a Question
            </p>
          </div>
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-primary to-light-blue text-primary-foreground font-medium py-3 px-6 text-base hover:opacity-90 transition-opacity"
          >
            <Link href="#contact">Ask Question</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;