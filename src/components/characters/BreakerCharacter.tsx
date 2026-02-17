"use client";

interface CharacterProps {
  className?: string;
}

export default function BreakerCharacter({ className }: CharacterProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="경계 파괴자"
    >
      {/* Cracking wall on the right side */}
      <rect x="120" y="80" width="70" height="110" rx="2" fill="#BDC3C7" />
      {/* Wall bricks */}
      <rect x="120" y="80" width="32" height="20" stroke="#95A5A6" strokeWidth="1" fill="#D5D8DC" />
      <rect x="152" y="80" width="38" height="20" stroke="#95A5A6" strokeWidth="1" fill="#D5D8DC" />
      <rect x="120" y="100" width="22" height="20" stroke="#95A5A6" strokeWidth="1" fill="#D5D8DC" />
      <rect x="142" y="100" width="28" height="20" stroke="#95A5A6" strokeWidth="1" fill="#D5D8DC" />
      <rect x="170" y="100" width="20" height="20" stroke="#95A5A6" strokeWidth="1" fill="#D5D8DC" />
      <rect x="120" y="120" width="35" height="20" stroke="#95A5A6" strokeWidth="1" fill="#D5D8DC" />
      <rect x="155" y="120" width="35" height="20" stroke="#95A5A6" strokeWidth="1" fill="#D5D8DC" />
      <rect x="120" y="140" width="25" height="20" stroke="#95A5A6" strokeWidth="1" fill="#D5D8DC" />
      <rect x="145" y="140" width="25" height="20" stroke="#95A5A6" strokeWidth="1" fill="#D5D8DC" />
      <rect x="170" y="140" width="20" height="20" stroke="#95A5A6" strokeWidth="1" fill="#D5D8DC" />
      <rect x="120" y="160" width="35" height="30" stroke="#95A5A6" strokeWidth="1" fill="#D5D8DC" />
      <rect x="155" y="160" width="35" height="30" stroke="#95A5A6" strokeWidth="1" fill="#D5D8DC" />

      {/* Crack lines radiating from punch point */}
      <path d="M125 115 L118 108 L112 106" stroke="#7F8C8D" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M125 118 L115 118" stroke="#7F8C8D" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M125 120 L116 126 L112 132" stroke="#7F8C8D" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M128 112 L126 100 L122 92" stroke="#7F8C8D" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M132 122 L134 135 L130 145" stroke="#7F8C8D" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M130 110 L138 100" stroke="#7F8C8D" strokeWidth="1" strokeLinecap="round" />

      {/* Flying debris */}
      <rect x="108" y="104" width="6" height="5" rx="1" fill="#BDC3C7" transform="rotate(-20 111 106)" />
      <rect x="104" y="118" width="5" height="4" rx="1" fill="#D5D8DC" transform="rotate(15 106 120)" />
      <rect x="110" y="130" width="4" height="3" rx="1" fill="#BDC3C7" transform="rotate(-30 112 131)" />
      <rect x="114" y="96" width="3" height="3" rx="0.5" fill="#95A5A6" transform="rotate(25 115 97)" />
      <rect x="106" y="112" width="3" height="2" rx="0.5" fill="#95A5A6" transform="rotate(-10 107 113)" />

      {/* Body */}
      <rect x="44" y="112" width="52" height="48" rx="12" fill="#FF6B6B" />

      {/* Legs */}
      <rect x="50" y="152" width="14" height="24" rx="6" fill="#FF6B6B" />
      <rect x="76" y="152" width="14" height="24" rx="6" fill="#FF6B6B" />
      {/* Shoes */}
      <ellipse cx="57" cy="178" rx="10" ry="5" fill="#C0392B" />
      <ellipse cx="83" cy="178" rx="10" ry="5" fill="#C0392B" />

      {/* Left arm - casual */}
      <path d="M44 122 L28 138 L32 142 L48 128" fill="#FF6B6B" />
      <circle cx="30" cy="140" r="5" fill="#FFE0BD" />

      {/* Right arm - punching through wall */}
      <path d="M96 120 L126 116 L126 122 L96 128" fill="#FF6B6B" />
      {/* Fist breaking through */}
      <circle cx="128" cy="118" r="7" fill="#FFE0BD" />
      <path d="M124 114 L126 110 L130 112 L128 115" fill="#FFE0BD" />

      {/* Head */}
      <circle cx="70" cy="72" r="32" fill="#FFE0BD" />

      {/* Hair - wild/spiky */}
      <path d="M38 58 Q42 38 54 50" fill="#C0392B" />
      <path d="M50 46 Q58 26 68 42" fill="#C0392B" />
      <path d="M64 38 Q72 22 80 38" fill="#C0392B" />
      <path d="M76 42 Q86 28 94 46" fill="#C0392B" />
      <path d="M88 50 Q98 38 102 58" fill="#C0392B" />

      {/* Eyes - determined/excited */}
      {/* Left eye */}
      <ellipse cx="58" cy="68" rx="5.5" ry="6" fill="white" />
      <ellipse cx="60" cy="68" rx="3.5" ry="4" fill="#2C3E50" />
      <circle cx="61" cy="67" r="1.5" fill="white" />
      {/* Right eye */}
      <ellipse cx="82" cy="68" rx="5.5" ry="6" fill="white" />
      <ellipse cx="84" cy="68" rx="3.5" ry="4" fill="#2C3E50" />
      <circle cx="85" cy="67" r="1.5" fill="white" />

      {/* Eyebrows - determined, angled down */}
      <path d="M50 58 Q58 54 65 59" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M75 59 Q82 54 90 58" stroke="#C0392B" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Big excited grin */}
      <path d="M54 82 Q70 96 86 82" stroke="#2C3E50" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Teeth */}
      <path d="M58 83 Q70 92 82 83 L82 85 Q70 90 58 85 Z" fill="white" />

      {/* Impact lines near fist */}
      <line x1="136" y1="108" x2="142" y2="104" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
      <line x1="138" y1="116" x2="146" y2="116" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />
      <line x1="136" y1="126" x2="142" y2="130" stroke="#FFD700" strokeWidth="2" strokeLinecap="round" />

      {/* Blush */}
      <circle cx="50" cy="78" r="4.5" fill="#FFB6B6" opacity="0.5" />
      <circle cx="90" cy="78" r="4.5" fill="#FFB6B6" opacity="0.5" />
    </svg>
  );
}
