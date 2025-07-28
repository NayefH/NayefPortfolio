import React from "react";

interface Section {
  id: string;
  title: string;
  text: string;
  image?: string;
}

const SectionRenderer: React.FC<{ sections: Section[] }> = ({ sections }) => (
  <div className="relative z-10">
    {sections.map((section) => (
      <section
        id={section.id}
        key={section.id}
        className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] py-20 px-6 gap-10"
      >
        {section.image && (
          <div className="max-w-sm w-full hexagon border-2 border-neon-turquoise shadow-lg shadow-neon-turquoise/50 animate-hexagon-glow overflow-hidden">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="max-w-2xl w-full bg-black/40 backdrop-blur-sm rounded-xl px-8 py-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-200 mb-6 text-center md:text-left uppercase tracking-wide drop-shadow-md">
            {section.title}
          </h2>
          <p className="text-lg md:text-2xl text-gray-100 whitespace-pre-line leading-relaxed drop-shadow-lg animate-fade-in text-center md:text-left">
            {section.text}
          </p>
        </div>
      </section>
    ))}
  </div>
);

export default SectionRenderer;
