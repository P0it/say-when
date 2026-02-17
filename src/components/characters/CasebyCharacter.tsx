"use client";

interface CharacterProps {
  className?: string;
}

export default function CasebyCharacter({ className }: CharacterProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="케바케 마스터"
    >
      {/* Body */}
      <rect x="74" y="118" width="52" height="48" rx="12" fill="#95E1D3" />

      {/* Legs */}
      <rect x="80" y="158" width="14" height="22" rx="6" fill="#95E1D3" />
      <rect x="106" y="158" width="14" height="22" rx="6" fill="#95E1D3" />
      {/* Shoes */}
      <ellipse cx="87" cy="182" rx="10" ry="5" fill="#2C3E50" />
      <ellipse cx="113" cy="182" rx="10" ry="5" fill="#2C3E50" />

      {/* Left arm - holding scale */}
      <path d="M74 126 L42 100 L46 96 L76 120" fill="#95E1D3" />
      <circle cx="42" cy="98" r="5" fill="#FFE0BD" />

      {/* Balance scale */}
      {/* Pole */}
      <rect x="40" y="60" width="3" height="38" rx="1" fill="#BDC3C7" />
      {/* Beam - tilted */}
      <line x1="20" y1="67" x2="63" y2="58" stroke="#BDC3C7" strokeWidth="3" strokeLinecap="round" />
      {/* Left pan (lower) */}
      <path d="M14 67 L12 78 Q18 82 26 78 L24 67" fill="#D4AC0D" />
      <line x1="14" y1="67" x2="19" y2="62" stroke="#BDC3C7" strokeWidth="1.5" />
      <line x1="24" y1="67" x2="19" y2="62" stroke="#BDC3C7" strokeWidth="1.5" />
      {/* Right pan (higher) */}
      <path d="M57 58 L55 69 Q61 73 69 69 L67 58" fill="#D4AC0D" />
      <line x1="57" y1="58" x2="62" y2="53" stroke="#BDC3C7" strokeWidth="1.5" />
      <line x1="67" y1="58" x2="62" y2="53" stroke="#BDC3C7" strokeWidth="1.5" />
      {/* Scale top */}
      <polygon points="41,56 40,60 43,60 42,56" fill="#95A5A6" />

      {/* Right arm - casual */}
      <path d="M126 128 L150 140 L148 146 L124 134" fill="#95E1D3" />
      <circle cx="150" cy="143" r="5" fill="#FFE0BD" />

      {/* Head */}
      <circle cx="100" cy="78" r="32" fill="#FFE0BD" />

      {/* Hair - spiky fun style */}
      <path d="M68 65 Q74 40 85 55" fill="#4A3728" />
      <path d="M82 52 Q90 32 100 48" fill="#4A3728" />
      <path d="M96 44 Q106 28 112 48" fill="#4A3728" />
      <path d="M108 50 Q118 36 128 58" fill="#4A3728" />
      <path d="M122 60 Q130 44 132 65" fill="#4A3728" />

      {/* Left eye - winking (closed) */}
      <path d="M84 76 Q90 80 96 76" stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Right eye - open */}
      <ellipse cx="114" cy="76" rx="5" ry="5.5" fill="white" />
      <ellipse cx="114" cy="76" rx="3" ry="3.5" fill="#2C3E50" />
      <circle cx="115.5" cy="75" r="1.2" fill="white" />

      {/* Eyebrows */}
      <path d="M82 68 Q90 64 96 68" stroke="#4A3728" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M108 68 Q114 64 120 68" stroke="#4A3728" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Confident smirk */}
      <path d="M92 90 Q100 96 112 88" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Blush */}
      <circle cx="82" cy="84" r="4.5" fill="#FFB6B6" opacity="0.4" />
      <circle cx="122" cy="84" r="4.5" fill="#FFB6B6" opacity="0.4" />

      {/* Question marks floating around */}
      <text x="152" y="90" fontSize="14" fill="#95E1D3" fontWeight="bold" opacity="0.6">?</text>
      <text x="160" y="110" fontSize="10" fill="#95E1D3" fontWeight="bold" opacity="0.4">?</text>
    </svg>
  );
}
