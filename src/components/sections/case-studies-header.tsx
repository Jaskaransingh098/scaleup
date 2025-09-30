import React from "react";
import Link from "next/link";
import ScrollStack from "../ui/ScrollStack";

const CaseStudiesHeader = () => {
  const projects = [
    {
      title: "Matthias Leidinger",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      link: "https://images.unsplash.com/photo-1605106702842-01a887a31122?q=80&w=500&auto=format&fit=crop",
      color: "#5196fd",
    },
    {
      title: "Clément Chapillon",
      description:
        "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément.",
      link: "https://images.unsplash.com/photo-1605106250963-ffda6d2a4b32?w=500&auto=format&fit=crop&q=60",
      color: "#8f89ff",
    },
    {
      title: "Zissou",
      description:
        "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.",
      link: "https://images.unsplash.com/photo-1605106901227-991bd663255c?w=500&auto=format&fit=crop",
      color: "#13006c",
    },
    {
      title: "Mathias Svold and Ulrik Hasemann",
      description:
        "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
      link: "https://images.unsplash.com/photo-1605106715994-18d3fecffb98?w=500&auto=format&fit=crop&q=60",
      color: "#ed649e",
    },
    {
      title: "Mark Rammers",
      description:
        "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote.",
      link: "https://images.unsplash.com/photo-1506792006437-256b665541e2?w=500&auto=format&fit=crop",
      color: "#fd521a",
    },
  ];

  return (
    <section className="bg-transparent py-[120px]">
      <div className="container mx-auto flex flex-col items-center justify-center gap-10 text-center">
        <div className="flex w-full max-w-[800px] flex-col items-center">
          <h1 className="text-[48px] font-semibold leading-[56px] text-text-primary">
            Look at
          </h1>
          <h1 className="text-[48px] font-semibold leading-[56px]">
            <span className="bg-gradient-to-r from-primary to-light-blue bg-clip-text text-transparent">
              What We’ve Achieved So Far
            </span>
          </h1>
        </div>
        <ScrollStack projects={projects} />

        <Link
          href="#contact"
          className="inline-block rounded-lg bg-gradient-to-r from-primary to-light-blue px-8 py-4 text-base font-medium text-primary-foreground shadow-[0_4px_16px_rgba(66,133,244,0.3)] transition-transform duration-300 ease-out hover:-translate-y-[2px]"
        >
          Apply To Work With Us
        </Link>
      </div>
    </section>
  );
};

export default CaseStudiesHeader;
