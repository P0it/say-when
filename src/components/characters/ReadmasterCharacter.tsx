"use client";

interface CharacterProps {
  className?: string;
}

export default function ReadmasterCharacter({ className }: CharacterProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="읽씹 장인"
    >
      {/* Body */}
      <rect x="72" y="115" width="56" height="55" rx="12" fill="#E8A87C" />

      {/* Legs */}
      <rect x="78" y="162" width="16" height="24" rx="6" fill="#E8A87C" />
      <rect x="106" y="162" width="16" height="24" rx="6" fill="#E8A87C" />
      {/* Shoes */}
      <ellipse cx="86" cy="188" rx="12" ry="5" fill="#5D4037" />
      <ellipse cx="114" cy="188" rx="12" ry="5" fill="#5D4037" />

      {/* Left arm holding phone */}
      <path d="M72 125 L48 140 L48 132 L72 118" fill="#E8A87C" />
      <circle cx="46" cy="136" r="5.5" fill="#FFE0BD" />

      {/* Phone */}
      <rect x="30" y="126" width="22" height="34" rx="3" fill="#2C3E50" />
      <rect x="32" y="130" width="18" height="24" rx="1" fill="#ECF0F1" />
      {/* Chat bubbles on phone */}
      <rect x="33" y="132" width="10" height="4" rx="2" fill="#3498DB" />
      <rect x="37" y="138" width="10" height="4" rx="2" fill="#BDC3C7" />
      <rect x="33" y="144" width="10" height="4" rx="2" fill="#3498DB" />
      <rect x="37" y="150" width="8" height="3" rx="1.5" fill="#BDC3C7" />

      {/* Right arm casual */}
      <path d="M128 125 L148 145 L142 148 L125 130" fill="#E8A87C" />
      <circle cx="146" cy="148" r="5.5" fill="#FFE0BD" />

      {/* Head */}
      <circle cx="100" cy="72" r="34" fill="#FFE0BD" />

      {/* Hair */}
      <ellipse cx="100" cy="46" rx="30" ry="12" fill="#4A3728" />
      <path d="M70 50 Q72 65 75 55" fill="#4A3728" />
      <path d="M130 50 Q128 65 125 55" fill="#4A3728" />

      {/* Eyes looking sideways (to the right) */}
      {/* Left eye */}
      <ellipse cx="88" cy="68" rx="6" ry="6.5" fill="white" />
      <ellipse cx="91" cy="68" rx="3" ry="3.5" fill="#2C3E50" />
      <circle cx="92" cy="67" r="1" fill="white" />
      {/* Right eye */}
      <ellipse cx="112" cy="68" rx="6" ry="6.5" fill="white" />
      <ellipse cx="115" cy="68" rx="3" ry="3.5" fill="#2C3E50" />
      <circle cx="116" cy="67" r="1" fill="white" />

      {/* Eyebrows - slightly worried */}
      <path d="M80 58 Q88 56 94 59" stroke="#4A3728" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M106 59 Q112 56 120 58" stroke="#4A3728" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Awkward smile */}
      <path d="M90 82 Q95 86 100 85 Q105 86 110 82" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Sweat drops */}
      <path d="M135 55 Q137 50 139 55 Q137 60 135 55 Z" fill="#74B9FF" />
      <path d="M142 65 Q143.5 61 145 65 Q143.5 69 142 65 Z" fill="#74B9FF" />
      <path d="M138 75 Q139 72 140 75 Q139 78 138 75 Z" fill="#74B9FF" opacity="0.7" />

      {/* Blush */}
      <circle cx="80" cy="78" r="5" fill="#FFB6B6" opacity="0.4" />
      <circle cx="120" cy="78" r="5" fill="#FFB6B6" opacity="0.4" />
    </svg>
  );
}
