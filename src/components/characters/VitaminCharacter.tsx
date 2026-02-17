"use client";

interface CharacterProps {
  className?: string;
}

export default function VitaminCharacter({ className }: CharacterProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="인간 비타민"
    >
      {/* Sparkle effects */}
      {/* Top-left sparkle */}
      <path d="M30 40 L32 34 L34 40 L32 46 Z" fill="#FFD700" />
      <path d="M28 40 L32 38 L36 40 L32 42 Z" fill="#FFD700" />
      {/* Top-right sparkle */}
      <path d="M165 30 L167 24 L169 30 L167 36 Z" fill="#FFD700" />
      <path d="M163 30 L167 28 L171 30 L167 32 Z" fill="#FFD700" />
      {/* Right sparkle */}
      <path d="M172 85 L174 80 L176 85 L174 90 Z" fill="#FFD700" />
      <path d="M170 85 L174 83 L178 85 L174 87 Z" fill="#FFD700" />
      {/* Left sparkle */}
      <path d="M25 90 L26.5 86 L28 90 L26.5 94 Z" fill="#FFD700" opacity="0.7" />
      <path d="M23.5 90 L26.5 88.5 L29.5 90 L26.5 91.5 Z" fill="#FFD700" opacity="0.7" />
      {/* Small sparkle dots */}
      <circle cx="45" cy="25" r="2" fill="#FFD700" opacity="0.5" />
      <circle cx="155" cy="55" r="2" fill="#FFD700" opacity="0.6" />
      <circle cx="38" cy="70" r="1.5" fill="#FFD700" opacity="0.4" />
      <circle cx="168" cy="60" r="1.5" fill="#FFD700" opacity="0.5" />

      {/* Body */}
      <rect x="74" y="118" width="52" height="48" rx="12" fill="#FCBAD3" />

      {/* Legs */}
      <rect x="80" y="158" width="14" height="22" rx="6" fill="#FCBAD3" />
      <rect x="106" y="158" width="14" height="22" rx="6" fill="#FCBAD3" />
      {/* Shoes */}
      <ellipse cx="87" cy="182" rx="10" ry="5" fill="#E91E63" />
      <ellipse cx="113" cy="182" rx="10" ry="5" fill="#E91E63" />

      {/* Left arm - energetic pose */}
      <path d="M74 126 L50 110 L54 106 L76 120" fill="#FCBAD3" />
      <circle cx="50" cy="108" r="5.5" fill="#FFE0BD" />

      {/* Right arm - thumbs up */}
      <path d="M126 125 L148 100 L152 104 L128 128" fill="#FCBAD3" />
      <circle cx="150" cy="100" r="5.5" fill="#FFE0BD" />
      {/* Thumb */}
      <path d="M148 94 L146 86 L150 85 L152 93" fill="#FFE0BD" />
      {/* Fist */}
      <rect x="146" y="97" width="10" height="7" rx="3" fill="#FFE0BD" />

      {/* Head */}
      <circle cx="100" cy="76" r="32" fill="#FFE0BD" />

      {/* Hair - energetic spiky */}
      <path d="M68 62 Q70 42 82 52" fill="#2C3E50" />
      <path d="M78 48 Q86 30 96 46" fill="#2C3E50" />
      <path d="M92 42 Q100 24 108 42" fill="#2C3E50" />
      <path d="M104 46 Q114 30 122 48" fill="#2C3E50" />
      <path d="M118 52 Q128 40 132 62" fill="#2C3E50" />

      {/* Sunglasses */}
      {/* Bridge */}
      <rect x="93" y="68" width="14" height="3" rx="1.5" fill="#2C3E50" />
      {/* Left lens */}
      <rect x="76" y="64" width="20" height="14" rx="4" fill="#2C3E50" />
      {/* Right lens */}
      <rect x="104" y="64" width="20" height="14" rx="4" fill="#2C3E50" />
      {/* Temple arms */}
      <path d="M76 68 L68 66" stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M124 68 L132 66" stroke="#2C3E50" strokeWidth="2.5" strokeLinecap="round" />
      {/* Lens shine */}
      <rect x="78" y="66" width="4" height="6" rx="1" fill="white" opacity="0.2" />
      <rect x="106" y="66" width="4" height="6" rx="1" fill="white" opacity="0.2" />

      {/* Big confident grin */}
      <path d="M84 88 Q100 102 116 88" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Teeth */}
      <path d="M88 89 Q100 98 112 89 L112 91 Q100 96 88 91 Z" fill="white" />

      {/* Blush */}
      <circle cx="78" cy="84" r="5" fill="#FFB6B6" opacity="0.5" />
      <circle cx="122" cy="84" r="5" fill="#FFB6B6" opacity="0.5" />
    </svg>
  );
}
