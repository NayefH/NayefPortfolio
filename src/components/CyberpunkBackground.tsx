import React from "react";

const CyberpunkBackground: React.FC = () => (
  <>
    {/* SVG-Linien und -Formen */}
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <svg
        className="absolute inset-0 w-full h-full"
        width="100%"
        height="100%"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
      >
        {[...Array(8)].map((_, i) => (
          <line
            key={`d1-${i}`}
            x1={-400 + i * 320}
            y1="0"
            x2={320 + i * 320}
            y2="1080"
            stroke="#00fff7cc"
            strokeWidth="2"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.1;0.6;0.1"
              dur="10s"
              repeatCount="indefinite"
              begin={`${i * 0.8}s`}
            />
          </line>
        ))}
        {[...Array(8)].map((_, i) => (
          <line
            key={`d2-${i}`}
            x1={1920 - i * 320}
            y1="0"
            x2={1520 - i * 320}
            y2="1080"
            stroke="#00fff7cc"
            strokeWidth="2"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.1;0.6;0.1"
              dur="10s"
              repeatCount="indefinite"
              begin={`${i * 0.8 + 4}s`}
            />
          </line>
        ))}
        {[...Array(12)].map((_, i) => (
          <line
            key={`grid-h-${i}`}
            x1="0"
            y1={(i * 90).toString()}
            x2="1920"
            y2={(i * 90).toString()}
            stroke="#00fff744"
            strokeWidth="1"
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <line
            key={`grid-v-${i}`}
            y1="0"
            x1={(i * 96).toString()}
            y2="1080"
            x2={(i * 96).toString()}
            stroke="#00fff744"
            strokeWidth="1"
          />
        ))}
        {[...Array(7)].map((_, i) => {
          const x = 140 + i * 250;
          const y = 200 + (i % 2) * 150;
          return (
            <polygon
              key={`hex-${i}`}
              points={`
                ${x},${y - 20} 
                ${x + 17},${y - 10} 
                ${x + 17},${y + 10} 
                ${x},${y + 20} 
                ${x - 17},${y + 10} 
                ${x - 17},${y - 10}
              `}
              fill="none"
              stroke="#00fff7aa"
              strokeWidth="2"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.1;0.5;0.1"
                dur="6s"
                repeatCount="indefinite"
                begin={`${i * 0.9}s`}
              />
            </polygon>
          );
        })}
        {[...Array(30)].map((_, i) => (
          <circle
            key={`star-${i}`}
            cx={Math.random() * 1920}
            cy={Math.random() * 1080}
            r={1 + Math.random() * 1.5}
            fill="#00fff7cc"
            opacity="0.5"
          >
            <animate
              attributeName="opacity"
              values="0.2;0.8;0.2"
              dur={`${3 + Math.random() * 5}s`}
              repeatCount="indefinite"
              begin={`${Math.random() * 10}s`}
            />
          </circle>
        ))}
        <polygon
          points="200,200 300,400 100,400"
          fill="#00fff722"
          stroke="#00fff766"
          strokeWidth="4"
        >
          <animate
            attributeName="opacity"
            values="0.15;0.35;0.15"
            dur="8s"
            repeatCount="indefinite"
          />
        </polygon>
        <polygon
          points="1720,300 1820,500 1620,500"
          fill="#00fff711"
          stroke="#00fff744"
          strokeWidth="3"
        >
          <animate
            attributeName="opacity"
            values="0.10;0.30;0.10"
            dur="10s"
            repeatCount="indefinite"
          />
        </polygon>
        <polygon
          points="900,800 1000,1000 800,1000"
          fill="#00fff718"
          stroke="#00fff755"
          strokeWidth="3"
        >
          <animate
            attributeName="opacity"
            values="0.12;0.28;0.12"
            dur="12s"
            repeatCount="indefinite"
          />
        </polygon>
      </svg>
    </div>

    {/* Partikel-Animationen */}
    {[...Array(18)].map((_, i) => (
      <div
        key={i}
        className="fixed rounded-full bg-cyan-400 opacity-20 blur-[2px] animate-gold-particle"
        style={{
          width: `${Math.random() * 12 + 8}px`,
          height: `${Math.random() * 12 + 8}px`,
          top: `${Math.random() * 95}%`,
          left: `${Math.random() * 95}%`,
          animationDelay: `${Math.random() * 6}s`,
          zIndex: 2,
        }}
      />
    ))}
  </>
);

export default CyberpunkBackground;
