import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../App.css";
import CyberpunkBackground from "./CyberpunkBackground";

import BewFoto from "../public/images/BewFoto.jpg";
import Technologienj from "../public/images/Technologien.png";

// Partikelkomponente mit zufälliger Positionierung
const Particles: React.FC = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const particleCount = 18;
    const newParticles = Array.from({ length: particleCount }, (_, i) => {
      const size = Math.random() * 12 + 8;
      const style: React.CSSProperties = {
        width: `${size}px`,
        height: `${size}px`,
        top: `${Math.random() * 95}%`,
        left: `${Math.random() * 95}%`,
        animationDelay: `${Math.random() * 6}s`,
        zIndex: 2,
      };
      return (
        <div
          key={i}
          className="fixed rounded-full bg-cyan-400 opacity-20 blur-[2px] animate-gold-particle"
          style={style}
        />
      );
    });

    setParticles(newParticles);
  }, []);

  return <>{particles}</>;
};

const nav = [
  { id: "about", label: "Über mich" },
  { id: "projects", label: "Projekte" },
  { id: "projects-links", label: "Projekte verlinkt" },
  { id: "skills", label: "Skills" },
  { id: "vision", label: "Vision" },
  { id: "contact", label: "Kontakt" },
];

const sections = [
  {
    id: "about",
    title: "Über mich",
    text: `
Ich bin Nayef Hajjaj, Absolvent der Medieninformatik
an der  Berliner Hochschule für Technik (Note 2,3). 

Meine Leidenschaft gilt modernen, intuitiven Webanwendungen –
besonders mit React, TypeScript und Bootstrap.

Innerhalb meines Studiums habe ich viel praktische Erfahrung gesammelt,
unter anderem in der Entwicklung von Dashboards und individuellen Tools. 

Technik und Design so zu kombinieren, dass Anwendungen sicher, benutzerfreundlich und ästhetisch sind, begeistert mich. 

Ich finde gerne Wege, meine Visionen effektiv umzusetzen - so wie bei dieser Webseite.`,
    image: BewFoto,
  },

  {
    id: "projects",
    title: "Meine bisherigen Projekte",
    text: `Im Laufe meiner bisherigen Arbeit habe ich an verschiedenen spannenden Projekten mitgewirkt, die meine Fähigkeiten und mein Interesse an der Entwicklung innovativer Anwendungen unterstreichen: \n\n• ReTraNetz-BB Dashboard: Entwicklung eines umfangreichen Web-Dashboards für ein Forschungsprojekt, realisiert mit React und TypeScript.\n• Sichere Dokumenten-App: Mobile Anwendung mit React Native und Expo zur lokal verschlüsselten Speicherung von Dokumenten.\n• WebGroove: Eine Webplattform für Musikproduktion, die kreative Werkzeuge für Nutzer bereitstellt.\n• Trinkprotokoll: Fullstack-App für Pflegeeinrichtungen, optimiert für einfache Bedienbarkeit und Datensicherheit.\n• MINT-VR Labs: VR-Anwendungen für die Hochschullehre, die digitales Lernen auf innovative Weise unterstützen.`,
  },

  // Hier kannst du den "Projekte verlinkt"-Abschnitt bei Bedarf wieder aktivieren:
  // {
  //   id: "projects-links",
  //   title: "Projekte zum Anschauen",
  //   text: (
  //     <ul className="list-disc list-inside space-y-2 text-lg md:text-2xl text-cyan-300">
  //       <li>
  //         <a
  //           href="https://github.com/deinusername/retranetzb-dashboard"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="underline hover:text-white transition-colors"
  //         >
  //           ReTraNetz-BB Dashboard (GitHub)
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="https://github.com/deinusername/sichere-dokumenten-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="underline hover:text-white transition-colors"
  //         >
  //           Sichere Dokumenten-App (GitHub)
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="https://webgroove.example.com"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="underline hover:text-white transition-colors"
  //         >
  //           WebGroove Plattform (Live Demo)
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="https://github.com/deinusername/trinkprotokoll-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="underline hover:text-white transition-colors"
  //         >
  //           Trinkprotokoll App (GitHub)
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="https://mint-vr.example.com"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="underline hover:text-white transition-colors"
  //         >
  //           MINT-VR Labs (Live Demo)
  //         </a>
  //       </li>
  //     </ul>
  //   ),
  // },

  {
    id: "skills",
    title: "Meine Skills",
    text: `• React & TypeScript:  
  Moderne Web-Apps mit sauberen Komponenten

• Bootstrap & Tailwind:  
  Responsive und stylische UI-Designs

• Firebase & Expo:  
  Cross-Plattform Mobile Apps mit sicherer Speicherung

• Verschlüsselung (AES-256):  
  Sicherheit auf höchstem Level

• Fullstack-Entwicklung:  
  Vom Frontend bis zum Backend`,
    image: Technologienj,
  },
  {
    id: "vision",
    title: "Meine Vision",
    text: `Ich möchte Technologie und Design verbinden, um intuitive und sichere digitale Erlebnisse zu schaffen. Für mich steht Innovation im Fokus, besonders im Bereich Datenschutz und User Experience.`,
  },
  {
    id: "contact",
    title: "Kontakt",
    text: `Du willst mit mir zusammenarbeiten oder hast Fragen? 
    Schreib mir gerne eine Mail oder vernetze dich auf LinkedIn.
     Lass uns gemeinsam die Zukunft der digitalen Welt 
     gestalten!\n\n📧 nayef_hajjaj[at]hotmail.de\n🔗 linkedin.com/in/nayef-hajjaj`,
  },
];

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const CyberpunkDesign: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-[#0a0a0a] via-[#111827] to-[#0d0d0d]">
      {/* Hintergrund SVG */}
      <CyberpunkBackground />

      <Particles />
      <Navbar sections={sections} scrollToSection={scrollToSection} />

      {/* Animierte Partikel */}
      <Particles />

      {/* Navbar */}
      <Navbar sections={sections} scrollToSection={scrollToSection} />

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
              {typeof section.text === "string" ? (
                <p className="text-lg md:text-2xl text-gray-100 whitespace-pre-line leading-relaxed drop-shadow-lg animate-fade-in text-center md:text-left">
                  {section.text}
                </p>
              ) : (
                <div className="drop-shadow-lg animate-fade-in text-center md:text-left">
                  {section.text}
                </div>
              )}
            </div>
          </section>
        ))}
        <footer className="flex flex-col items-center justify-center py-10">
          <span className="text-cyan-700 text-sm">© 2025 Neon Future</span>
        </footer>
      </div>

      {/* Japanischer Hintergrundtext */}
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex items-center justify-center overflow-hidden">
          <span
            className="select-none text-[10vw] md:text-[7vw] font-extrabold text-cyan-900/20 whitespace-nowrap animate-jp-scroll-horizontal"
            style={{
              letterSpacing: "0.2em",
              userSelect: "none",
              writingMode: "unset",
            }}
          >
            ウェブ開発者
          </span>
        </div>
      </div>
    </div>
  );
};

export default CyberpunkDesign;
