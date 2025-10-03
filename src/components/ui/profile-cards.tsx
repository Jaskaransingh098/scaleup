"use client";

import React from "react";

// --- Social Icon Components ---
// You can replace these with a library like react-icons if you prefer

const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400 hover:text-white transition-colors"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9s-1.4-1.2-3.3-1.2c-.1 0-.1 0 0 0-5 3.5-6.1 2.6-6.1 2.6s-2.1-4.6 2.6-8.2c0 0-1.8.4-3.6.8.2-1.9 1.4-3.5 1.4-3.5s1.9-1.2 4.4.7c0 0 .5-1.2 2.9-1.2s2.9 1.2 2.9 1.2z"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400 hover:text-white transition-colors"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400 hover:text-white transition-colors"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

// --- Profile Card Component ---
interface ProfileCardProps {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  title,
  bio,
  imageUrl,
}) => {
  return (
    <div
      className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl overflow-hidden shadow-lg 
                w-full md:w-[40%] font-sans transform hover:scale-105 transition-transform duration-300"
    >
      {/* Profile Image */}
      <div className="p-4">
        <div className="bg-black/30 rounded-2xl">
          <img
            className="w-full h-[50vh] object-cover rounded-2xl mix-blend-luminosity"
            src={imageUrl}
            alt={`${name}'s profile`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null; // prevent infinite loop
              target.src =
                "https://placehold.co/400x400/2d2d2d/ffffff?text=Image+Error";
            }}
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 pt-2 text-white text-center">
        <h2 className="bg-[linear-gradient(to_right,#a83279,#d38312)] bg-clip-text text-transparent font-bold">{name}</h2>
        <p className="text-sm text-gray-200 font-semibold mb-3">{title}</p>
        <p className="text-gray-300 text-m leading-relaxed">{bio}</p>
      </div>

      {/* Social Icons Footer */}
      <div className="px-6 pt-2 pb-6 flex justify-center space-x-6">
        <a href="#" aria-label="Twitter">
          <TwitterIcon />
        </a>
        <a href="#" aria-label="LinkedIn">
          <LinkedinIcon />
        </a>
        <a href="#" aria-label="GitHub">
          <GithubIcon />
        </a>
      </div>
    </div>
  );
};

// --- Main App Component ---
const InfoCards = () => {
  const profiles = [
    {
      name: "Madhav Singhla",
      title: "Co-Founder, Production & Ops",
      bio: "Madhav left his job to pursue his passion for media, launching his own agency Madnis Media before co-founding Aevo Media Labs. With 3 years in video production and editing, he specializes in building efficient workflows — from batch recording sessions to multi-platform repurposing. His role ensures clients can record once and walk away with a full funnel of content.",
      imageUrl:
        "/other.png",
    },
    {
      name: "Waleed",
      title: "Co-Founder, Growth & Strategy",
      bio: "Waleed has spent the past years building content systems end-to-end for agencies, founders, and consultants. From scripting to editing to scaling funnels, he’s refined the exact process that consistently drives inbound leads. At Aevo Media Labs, he focuses on strategy and growth — making sure every piece of content leads to qualified calls, not vanity metrics.",
      imageUrl:
        "/maddy.png",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row md:justify-center items-center p-4 gap-8 md:gap-[10%]">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          title={profile.title}
          bio={profile.bio}
          imageUrl={profile.imageUrl}
        />
      ))}
    </div>
  );
};

export default InfoCards;
