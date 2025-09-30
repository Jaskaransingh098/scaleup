import Image from 'next/image';
import { Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import React from 'react';

interface SocialItem {
  icon: React.ElementType;
  href: string;
  name: string;
}

interface Founder {
  name: string;
  description: string;
  image: string;
  socials: SocialItem[];
}

const founders: Founder[] = [
  {
    name: 'Kunal Jiwani',
    description: 'is the strategic brain behind every campaign, focused on delivering outcomes that truly move the needle. From positioning to performance, he makes sure every client feels seen, heard, and set up for long-term success.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/YTK03nRnd1BWYvAAk81F9JUSkHM.png?',
    socials: [
      {
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/kunaljiwani/',
        name: 'LinkedIn'
      },
      {
        icon: Twitter,
        href: 'https://x.com/JiwaniKunal',
        name: 'Twitter'
      },
      { 
        icon: Instagram, 
        href: 'https://www.instagram.com/kunal_jiwani/', 
        name: 'Instagram' 
      },
      { 
        icon: Youtube, 
        href: 'https://www.youtube.com/@KunalJiwani', 
        name: 'YouTube' 
      }
    ]
  },
  {
    name: 'Gandharv Mendhe',
    description: 'ensures everything runs like clockwork — from internal workflows to client check-ins. With a sharp eye for detail and a human-first approach, he turns complex projects into smooth, collaborative experiences.',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5ccec89d-7959-4c39-bc21-7fb146605244-scaleupmedia-in/assets/images/nsrH7MCMQRg6TV3NfB09u4br2ys.png?',
    socials: [
      {
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/gandharv-mendhe-994881212/',
        name: 'LinkedIn'
      },
      {
        icon: Twitter,
        href: 'https://x.com/gandharv_mendhe',
        name: 'Twitter'
      },
      { 
        icon: Instagram, 
        href: 'https://www.instagram.com/gandharvmendhe/', 
        name: 'Instagram' 
      },
      { 
        icon: Youtube, 
        href: 'https://www.youtube.com/@gandharvmendhe', 
        name: 'YouTube' 
      }
    ]
  }
];

const SocialIcon: React.FC<SocialItem> = ({ icon: Icon, href, name }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Link to ${name}`}>
    <div className="w-11 h-11 flex items-center justify-center bg-primary/10 rounded-lg group hover:bg-primary/20 transition-colors">
      <Icon className="w-5 h-5 text-primary" />
    </div>
  </a>
);

export default function FoundersSection() {
  return (
    <section id="founders" className="relative py-[100px] bg- overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        {/* <Image
          src="https://framerusercontent.com/images/XBtz1phaWuFmJnHyQtKgezPJHUU.png"
          alt="Background Design"
          width={1440}
          height={729}
          className="absolute top-[-193px] left-[-140px] pointer-events-none"
        />
        <Image
          src="https://framerusercontent.com/images/XBtz1phaWuFmJnHyQtKgezPJHUU.png"
          alt="Background Design"
          width={1440}
          height={729}
          className="absolute bottom-[-202px] left-[-140px] pointer-events-none"
        /> */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-[60px]">
          <h2 className="text-[48px] font-semibold text-text-primary leading-[56px]">
            Meet our{' '}
            <span className="bg-gradient-to-r from-primary to-light-blue bg-clip-text text-transparent">
              Founders
            </span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Wonder who's behind all this creative goodness? Say hello to our crew of superheroes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div key={index} className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col">
              <div className="relative w-full aspect-[580/388]">
                <Image
                  src={founder.image}
                  alt={`Portrait of ${founder.name}`}
                  fill
                  style={{objectFit: 'cover', objectPosition: 'top'}}
                  sizes="(max-width: 1200px) 100vw, 580px"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-[32px] font-semibold text-text-primary leading-[40px]">{founder.name}</h3>
                <p className="mt-4 text-base text-text-secondary leading-6 flex-grow">
                  {founder.description}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  {founder.socials.map((social, socialIndex) => (
                    <SocialIcon key={socialIndex} icon={social.icon} href={social.href} name={social.name} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}