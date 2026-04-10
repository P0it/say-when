"use client";

import type { ResultType, ResultTypeId } from "@/types/quiz";
import type { ComponentType } from "react";
import dynamic from "next/dynamic";

const characterMap: Record<ResultTypeId, ComponentType<{ className?: string }>> = {
  concrete: dynamic(() => import("@/components/characters/ConcreteCharacter")),
  readmaster: dynamic(() => import("@/components/characters/ReadmasterCharacter")),
  caseby: dynamic(() => import("@/components/characters/CasebyCharacter")),
  swiss: dynamic(() => import("@/components/characters/SwissCharacter")),
  vitamin: dynamic(() => import("@/components/characters/VitaminCharacter")),
  breaker: dynamic(() => import("@/components/characters/BreakerCharacter")),
};

const tagColors = [
  { bg: "#E8F3FF", text: "#3182F6" },
  { bg: "#E6FAF5", text: "#00B8A9" },
  { bg: "#E8FCE8", text: "#36B37E" },
  { bg: "#FFF0F0", text: "#F04452" },
  { bg: "#FFF8E1", text: "#FF8B00" },
  { bg: "#F2F4F6", text: "#6B7684" },
];

interface ResultCardProps {
  resultType: ResultType;
}

export default function ResultCard({ resultType }: ResultCardProps) {
  const CharacterSvg = characterMap[resultType.id];

  return (
    <div className="flex flex-col items-center">
      <div
        className="mb-6 flex h-52 w-52 items-center justify-center rounded-full shadow-sm"
        style={{ backgroundColor: `${resultType.themeColor}15` }}
      >
        <CharacterSvg className="h-44 w-44" />
      </div>

      <div className="mb-3 text-5xl">{resultType.emoji}</div>

      <h2
        className="mb-2 text-[24px] font-bold tracking-tight"
        style={{ color: resultType.themeColor }}
      >
        {resultType.name}
      </h2>

      <p className="mb-5 text-[15px] leading-[1.5] text-[#6B7684]">
        {resultType.subtitle}
      </p>

      {/* Trait badges */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {resultType.traits.map((trait, i) => {
          const color = tagColors[i % tagColors.length];
          return (
            <span
              key={trait}
              className="rounded-full px-3 py-1.5 text-[12px] font-semibold"
              style={{ backgroundColor: color.bg, color: color.text }}
            >
              #{trait}
            </span>
          );
        })}
      </div>

      {/* Description */}
      <div className="mb-4 w-full rounded-2xl bg-[#F9FAFB] px-5 py-5">
        <p className="mb-4 text-[13px] font-bold text-[#191F28]">
          📋 유형 설명
        </p>
        <p className="text-[14px] leading-[1.8] text-[#4E5968]">
          {resultType.description}
        </p>
      </div>

      {/* Examples */}
      <div
        className="mb-4 w-full rounded-2xl px-5 py-5"
        style={{ backgroundColor: `${resultType.themeColor}08` }}
      >
        <p className="mb-5 text-[13px] font-bold text-[#191F28]">
          👀 이런 행동 하고 있을걸요?
        </p>
        <ul className="space-y-3.5">
          {resultType.examples.map((ex, i) => (
            <li key={i} className="flex items-start gap-3 text-[14px] leading-[1.6] text-[#4E5968]">
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white"
                style={{ backgroundColor: resultType.themeColor }}
              >
                {i + 1}
              </span>
              <span>{ex}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Partner comment */}
      <div className="mb-3 w-full rounded-2xl bg-[#F9FAFB] px-5 py-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-lg">💑</span>
          <p className="text-[14px] font-bold text-[#191F28]">연인에게 한마디</p>
        </div>
        <p className="text-[14px] leading-[1.8] text-[#6B7684]">
          {resultType.commentCoupled}
        </p>
      </div>

      {/* Solo comment */}
      <div className="w-full rounded-2xl bg-[#F9FAFB] px-5 py-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="text-lg">💫</span>
          <p className="text-[14px] font-bold text-[#191F28]">솔로에게 한마디</p>
        </div>
        <p className="text-[14px] leading-[1.8] text-[#6B7684]">
          {resultType.commentSolo}
        </p>
      </div>
    </div>
  );
}
