"use client";

import type { ResultType, ResultTypeId } from "@/types/quiz";
import type { ComponentType } from "react";
import dynamic from "next/dynamic";
import { Badge } from "@toss/tds-mobile";
import { colors } from "@toss/tds-colors";

const characterMap: Record<ResultTypeId, ComponentType<{ className?: string }>> = {
  concrete: dynamic(() => import("@/components/characters/ConcreteCharacter")),
  readmaster: dynamic(() => import("@/components/characters/ReadmasterCharacter")),
  caseby: dynamic(() => import("@/components/characters/CasebyCharacter")),
  swiss: dynamic(() => import("@/components/characters/SwissCharacter")),
  vitamin: dynamic(() => import("@/components/characters/VitaminCharacter")),
  breaker: dynamic(() => import("@/components/characters/BreakerCharacter")),
};

type BadgeColor = "blue" | "teal" | "green" | "red" | "yellow" | "elephant";

// 태그별로 다양한 색상을 순환
const tagColors: BadgeColor[] = ["blue", "teal", "green", "red", "yellow", "elephant"];

interface ResultCardProps {
  resultType: ResultType;
}

export default function ResultCard({ resultType }: ResultCardProps) {
  const CharacterSvg = characterMap[resultType.id];

  return (
    <div className="flex flex-col items-center">
      {/* Character illustration */}
      <div
        className="mb-6 flex h-52 w-52 items-center justify-center rounded-full shadow-sm"
        style={{ backgroundColor: `${resultType.themeColor}15` }}
      >
        <CharacterSvg className="h-44 w-44" />
      </div>

      {/* Emoji */}
      <div className="mb-3 text-5xl">{resultType.emoji}</div>

      {/* Type name */}
      <h2
        className="mb-2 text-[24px] font-bold tracking-tight"
        style={{ color: resultType.themeColor }}
      >
        {resultType.name}
      </h2>

      {/* Subtitle */}
      <p className="mb-5 text-[15px] leading-[1.5]" style={{ color: colors.grey600 }}>
        {resultType.subtitle}
      </p>

      {/* Trait badges - 태그별 다양한 색상 */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {resultType.traits.map((trait, i) => (
          <Badge
            key={trait}
            size="small"
            color={tagColors[i % tagColors.length]}
            variant="weak"
          >
            #{trait}
          </Badge>
        ))}
      </div>

      {/* Description */}
      <div className="mb-4 w-full rounded-2xl px-5 py-5" style={{ backgroundColor: colors.grey50 }}>
        <p className="mb-4 text-[13px] font-bold" style={{ color: colors.grey900 }}>
          📋 유형 설명
        </p>
        <p className="text-[14px] leading-[1.8]" style={{ color: colors.grey700 }}>
          {resultType.description}
        </p>
      </div>

      {/* Examples section */}
      <div
        className="mb-4 w-full rounded-2xl px-5 py-5"
        style={{ backgroundColor: `${resultType.themeColor}08` }}
      >
        <p className="mb-5 text-[13px] font-bold" style={{ color: colors.grey900 }}>
          👀 이런 행동 하고 있을걸요?
        </p>
        <ul className="space-y-3.5">
          {resultType.examples.map((ex, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[14px] leading-[1.6]"
              style={{ color: colors.grey700 }}
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-bold"
                style={{ backgroundColor: resultType.themeColor, color: colors.white }}
              >
                {i + 1}
              </span>
              <span>{ex}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Partner comment */}
      <div className="mb-3 w-full rounded-2xl px-5 py-5" style={{ backgroundColor: colors.grey50 }}>
        <div className="mb-3 flex items-center gap-2">
          <span className="text-lg">💑</span>
          <p className="text-[14px] font-bold" style={{ color: colors.grey900 }}>
            연인에게 한마디
          </p>
        </div>
        <p className="text-[14px] leading-[1.8]" style={{ color: colors.grey600 }}>
          {resultType.commentCoupled}
        </p>
      </div>

      {/* Solo comment */}
      <div className="w-full rounded-2xl px-5 py-5" style={{ backgroundColor: colors.grey50 }}>
        <div className="mb-3 flex items-center gap-2">
          <span className="text-lg">💫</span>
          <p className="text-[14px] font-bold" style={{ color: colors.grey900 }}>
            솔로에게 한마디
          </p>
        </div>
        <p className="text-[14px] leading-[1.8]" style={{ color: colors.grey600 }}>
          {resultType.commentSolo}
        </p>
      </div>
    </div>
  );
}
