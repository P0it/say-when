"use client";

interface CharacterProps {
  className?: string;
}

export default function SwissCharacter({ className }: CharacterProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="스킨십 스위스"
    >
      {/* Body */}
      <rect x="74" y="118" width="52" height="48" rx="12" fill="#AA96DA" />

      {/* Legs */}
      <rect x="80" y="158" width="14" height="22" rx="6" fill="#AA96DA" />
      <rect x="106" y="158" width="14" height="22" rx="6" fill="#AA96DA" />
      {/* Shoes */}
      <ellipse cx="87" cy="182" rx="10" ry="5" fill="#7B68AE" />
      <ellipse cx="113" cy="182" rx="10" ry="5" fill="#7B68AE" />

      {/* Left arm - spread out */}
      <path d="M74 126 L38 118 L38 124 L74 134" fill="#AA96DA" />
      <circle cx="36" cy="121" r="5.5" fill="#FFE0BD" />
      {/* Left hand open - palm up gesture */}
      <path d="M30 118 L26 114 M32 116 L30 112 M36 116 L36 112" stroke="#FFE0BD" strokeWidth="2" strokeLinecap="round" />

      {/* Right arm - spread out */}
      <path d="M126 126 L162 118 L162 124 L126 134" fill="#AA96DA" />
      <circle cx="164" cy="121" r="5.5" fill="#FFE0BD" />
      {/* Right hand open - palm up gesture */}
      <path d="M170 118 L174 114 M168 116 L170 112 M164 116 L164 112" stroke="#FFE0BD" strokeWidth="2" strokeLinecap="round" />

      {/* Head */}
      <circle cx="100" cy="76" r="32" fill="#FFE0BD" />

      {/* White beret */}
      <ellipse cx="100" cy="50" rx="34" ry="14" fill="white" />
      <ellipse cx="100" cy="48" rx="28" ry="10" fill="#F5F5F5" />
      <circle cx="100" cy="38" r="6" fill="white" />

      {/* Red cross on beret */}
      <rect x="97" y="32" width="6" height="16" rx="1" fill="#E74C3C" />
      <rect x="92" y="37" width="16" height="6" rx="1" fill="#E74C3C" />

      {/* Eyes - calm and slightly amused */}
      {/* Left eye */}
      <ellipse cx="88" cy="74" rx="5" ry="5.5" fill="white" />
      <ellipse cx="88" cy="74" rx="3" ry="3.5" fill="#2C3E50" />
      <circle cx="89.5" cy="73" r="1.2" fill="white" />
      {/* Right eye */}
      <ellipse cx="112" cy="74" rx="5" ry="5.5" fill="white" />
      <ellipse cx="112" cy="74" rx="3" ry="3.5" fill="#2C3E50" />
      <circle cx="113.5" cy="73" r="1.2" fill="white" />

      {/* Eyebrows - relaxed */}
      <path d="M81 65 Q88 62 95 65" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M105 65 Q112 62 119 65" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Calm amused smile */}
      <path d="M90 86 Q100 92 110 86" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Blush */}
      <circle cx="80" cy="82" r="5" fill="#FFB6B6" opacity="0.4" />
      <circle cx="120" cy="82" r="5" fill="#FFB6B6" opacity="0.4" />

      {/* Small balance/neutral symbols near hands */}
      <circle cx="28" cy="108" r="3" fill="#AA96DA" opacity="0.4" />
      <circle cx="172" cy="108" r="3" fill="#AA96DA" opacity="0.4" />
    </svg>
  );
}
