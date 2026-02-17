"use client";

interface CharacterProps {
  className?: string;
}

export default function ConcreteCharacter({ className }: CharacterProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="콘크리트 벽"
    >
      {/* Brick wall behind character */}
      <rect x="20" y="110" width="160" height="80" rx="3" fill="#C0392B" />
      {/* Brick rows */}
      <rect x="20" y="110" width="38" height="18" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="62" y="110" width="38" height="18" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="104" y="110" width="38" height="18" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="146" y="110" width="34" height="18" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="20" y="132" width="28" height="18" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="52" y="132" width="38" height="18" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="94" y="132" width="38" height="18" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="136" y="132" width="44" height="18" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="20" y="154" width="42" height="18" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="66" y="154" width="38" height="18" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="108" y="154" width="38" height="18" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="150" y="154" width="30" height="18" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="20" y="176" width="34" height="14" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="58" y="176" width="38" height="14" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="100" y="176" width="38" height="14" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />
      <rect x="142" y="176" width="38" height="14" rx="1" fill="#E74C3C" stroke="#A93226" strokeWidth="1" />

      {/* Body behind wall */}
      <rect x="75" y="100" width="50" height="50" rx="8" fill="#4A90D9" />

      {/* Crossed arms over wall */}
      {/* Left arm */}
      <path d="M60 118 L90 130 L90 122 L65 112 Z" fill="#4A90D9" />
      <circle cx="58" cy="116" r="5" fill="#FFE0BD" />
      {/* Right arm */}
      <path d="M140 118 L110 130 L110 122 L135 112 Z" fill="#4A90D9" />
      <circle cx="142" cy="116" r="5" fill="#FFE0BD" />
      {/* Arms crossing overlap */}
      <path d="M80 115 L120 115 L115 125 L85 125 Z" fill="#4A90D9" />

      {/* Head */}
      <circle cx="100" cy="65" r="32" fill="#FFE0BD" />

      {/* Safety helmet */}
      <ellipse cx="100" cy="42" rx="36" ry="16" fill="#F1C40F" />
      <rect x="64" y="38" width="72" height="12" rx="4" fill="#F1C40F" />
      <rect x="88" y="28" width="24" height="16" rx="4" fill="#F39C12" />
      {/* Helmet brim */}
      <rect x="60" y="46" width="80" height="5" rx="2" fill="#D4AC0D" />

      {/* Eyes */}
      {/* Left eye normal */}
      <ellipse cx="88" cy="62" rx="4.5" ry="5" fill="#2C3E50" />
      <circle cx="86.5" cy="60.5" r="1.5" fill="white" />
      {/* Right eye with raised eyebrow */}
      <ellipse cx="112" cy="62" rx="4.5" ry="5" fill="#2C3E50" />
      <circle cx="110.5" cy="60.5" r="1.5" fill="white" />

      {/* Left eyebrow normal */}
      <path d="M81 54 Q88 51 95 54" stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Right eyebrow raised */}
      <path d="M105 50 Q112 46 119 50" stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Serious mouth - slight smirk */}
      <path d="M92 78 Q100 82 108 78" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Blush circles */}
      <circle cx="80" cy="73" r="5" fill="#FFB6B6" opacity="0.5" />
      <circle cx="120" cy="73" r="5" fill="#FFB6B6" opacity="0.5" />
    </svg>
  );
}
