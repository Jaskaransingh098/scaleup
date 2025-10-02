import Image from "next/image";

const stats = [
  { value: "3+", label: "Years Of Experience" },
  { value: "$8,399,777", label: "Revenue In Pipeline Generated" },
  { value: "34,999,775+", label: "Organic Views Generated" },
  { value: "1,999,779+", label: "Accumulated Client Followers" },
];

const clientLogos = [
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/icons/cUSjcZIWZqAJ4poPpTd0H93Mys-2.png?", alt: "Profitplugg", name: "Profitplugg" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/icons/yvJ1SkZeUgYdqmn0kJpNGgFUDGo-3.png?", alt: "Adex Trades", name: "Adex Trades" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/icons/TN51LUW9h7zmACOR8YezWtU76D0-4.png?", alt: "Nicktalksmoney", name: "Nicktalksmoney" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/icons/CuckB2WEjDlRo5lSLQu9QSiOqwE-5.png?", alt: "Waybook", name: "Waybook" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/icons/YavhplhJMtHJfVj5rRymfgtTxA-6.png?", alt: "Nomad Shubham", name: "Nomad Shubham" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/icons/NAI9FOSvbHbm1hPG9zGwuHlqBWw-7.png?", alt: "Christian Edoria", name: "Christian Edoria" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/icons/umyyUpUX8T9SsBKqPTQ6AIN5i0-8.png?", alt: "VirtualBacon", name: "VirtualBacon" },
];

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="relative flex flex-col items-center justify-center p-8 bg-card border border-border rounded-3xl overflow-hidden text-center min-h-[200px]">
    <div className="absolute inset-0 z-0">
      <Image
        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/WcrHWFTN7cBpOOCJ3uhVkpsJXQ-4.svg?"
        alt=""
        layout="fill"
        objectFit="cover"
        className="opacity-70"
      />
    </div>
    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
    <div className="relative z-10 flex flex-col gap-2">
      <p className="text-[50px] leading-tight font-semibold text-text-primary">{value}</p>
      <p className="text-lg text-text-secondary">{label}</p>
    </div>
  </div>
);

const StatsSection = () => {
    const animationName = "stats-scroll";

    return (
        <section id="result-analytics" className="w-full py-32 px-6 overflow-x-hidden mt-[10px]">
            <style>
                {`
                @keyframes ${animationName} {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
                .animate-${animationName} {
                    animation: ${animationName} 40s linear infinite;
                }
                `}
            </style>
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4">
                <div className="bg-[rgba(53,58,82,0.4)] border border-border/50 rounded-full px-4 py-2 inline-block">
                    <p className="text-lg text-text-secondary">Results & Analytics</p>
                </div>
                <h2 className="text-5xl font-semibold text-text-primary">
                    Why{' '}
                    <span  className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] bg-clip-text text-transparent font-bold">
                        Choose us?
                    </span>
                </h2>
            </div>
            
            <div className="relative max-w-7xl mx-auto mt-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
                    <Image 
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/svgs/T1ZZ2IZibbSkeOrnrasRb6Ebc-5.svg?"
                        alt="Grid background"
                        width={313}
                        height={231}
                        className="pointer-events-none opacity-30"
                    />
                </div>
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <StatCard key={stat.label} value={stat.value} label={stat.label} />
                    ))}
                </div>
            </div>
{/* 
            <div className="mt-24 w-full overflow-hidden relative" style={{ 
                maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            }}>
                <div className={`flex w-max animate-${animationName}`}>
                    {[...clientLogos, ...clientLogos].map((logo, index) => (
                        <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center mx-8 w-40 text-center">
                            <div className="relative w-[130px] h-[130px] rounded-full flex items-center justify-center bg-secondary border border-white/10">
                                <Image 
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={130}
                                    height={130}
                                    className="rounded-full object-cover p-2"
                                />
                            </div>
                            <p className="mt-4 text-base font-medium text-text-primary whitespace-nowrap">{logo.name}</p>
                        </div>
                    ))}
                </div>
            </div> */}
        </section>
    );
};

export default StatsSection;