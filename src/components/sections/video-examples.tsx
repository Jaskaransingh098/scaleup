import Image from "next/image";
import { Play } from "lucide-react";

const longFormVideos = [
  {
    img: "https://i.ytimg.com/vi_webp/EyiDCeEc0cE/sddefault.webp",
    url: "https://www.youtube.com/watch?v=EyiDCeEc0cE",
  },
  {
    img: "https://i.ytimg.com/vi_webp/UJc1hdHIQMQ/sddefault.webp",
    url: "https://www.youtube.com/watch?v=UJc1hdHIQMQ",
  },
  {
    img: "https://i.ytimg.com/vi_webp/pnqSdJkjwE8/sddefault.webp",
    url: "https://www.youtube.com/watch?v=pnqSdJkjwE8",
  },
  {
    img: "https://i.ytimg.com/vi_webp/-WTMUm-ipHE/sddefault.webp",
    url: "https://www.youtube.com/watch?v=-WTMUm-ipHE",
  },
  {
    img: "https://i.ytimg.com/vi_webp/PA1ozvgtBvE/sddefault.webp",
    url: "https://www.youtube.com/watch?v=PA1ozvgtBvE",
  },
  {
    img: "https://i.ytimg.com/vi_webp/KB9kA-r7NJA/sddefault.webp",
    url: "https://www.youtube.com/watch?v=KB9kA-r7NJA",
  },
];

const shortFormVideos = [{ id: "c-YX0GUPTT4" }, { id: "dIq5Mn51XJk" }];

const VideoExamples = () => {
  return (
    <section
      id="video-examples"
      className="relative w-full bg-background py-[0px] overflow-hidden z-20"
    >
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/JmnNBcgGwOAnsO70g5notRa1v1k-17.svg?"
        alt="Left Side Background"
        width={622}
        height={1118}
        className="absolute top-[0px] left-[-188px] z-[1] hidden lg:block pointer-events-none"
        unoptimized
      />
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/XUV3B79RFYJmks4RdcuhqtsLo1k-16.svg?"
        alt="Right Side Background"
        width={590}
        height={1121}
        className="absolute top-[0px] right-[-212px] z-[1] hidden lg:block pointer-events-none"
        unoptimized
      />

      <div className="container relative z-10 py-[0px]">
        <div className="flex py-[60px] flex-col items-center gap-6 text-center mb-16">
          <h2 className="text-5xl font-semibold leading-[56px] text-text-primary">
            Long-Form
            <br />
            Video Examples
          </h2>
          <p className="max-w-xl text-lg text-text-secondary">
            Get more leads without sending 1000s cold emails/day, spending a
            dime on paid ads, or creating boring content
          </p>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {longFormVideos.map((video, index) => (
            <a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative rounded-3xl overflow-hidden group"
            >
              <Image
                src={video.img}
                alt={`Video thumbnail ${index + 1}`}
                width={384}
                height={216}
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center justify-center w-20 h-20 bg-card/80 backdrop-blur-sm rounded-full">
                  <Play className="w-10 h-10 ml-1 text-white fill-white" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 text-center mt-[120px]">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/JmnNBcgGwOAnsO70g5notRa1v1k-17.svg?"
            alt="Left Side Background Bottom"
            width={622}
            height={1118}
            className="absolute bottom-0 left-[-188px] z-[1] hidden lg:block pointer-events-none scale-y-[1]"
            unoptimized
          />
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/XUV3B79RFYJmks4RdcuhqtsLo1k-16.svg?"
            alt="Right Side Background Bottom"
            width={590}
            height={1121}
            className="absolute bottom-0 right-[-212px] z-[0] hidden lg:block pointer-events-none scale-y-[1]"
            unoptimized
          />
          <h2 className="text-5xl font-semibold leading-[56px] text-text-primary">
            Short-Form
            <br />
            Video Examples
          </h2>
          <p className="max-w-xl text-lg pb-[10px] text-text-secondary">
            Get more leads without sending 1000s cold emails/day, spending a
            dime on paid ads, or creating boring content
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {shortFormVideos.map((video) => (
            <div
              key={video.id}
              className="w-full max-w-[384px] sm:w-[384px] z-10 rounded-[20px] overflow-hidden aspect-[9/16]"
            >
              <iframe
                className="w-full h-full border-0"
                src={`https://www.youtube.com/embed/${video.id}?rel=0&controls=1&autoplay=0&mute=0&loop=0&fs=1&color=red`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoExamples;
