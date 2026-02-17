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

interface ResultCardProps {
  resultType: ResultType;
}

export default function ResultCard({ resultType }: ResultCardProps) {
  const CharacterSvg = characterMap[resultType.id];

  return (
    <div className="flex flex-col items-center rounded-2xl bg-white p-6 shadow-lg">
      {/* Character illustration */}
      <div
        className="mb-4 flex h-52 w-52 items-center justify-center rounded-full"
        style={{ backgroundColor: `${resultType.themeColor}20` }}
      >
        <CharacterSvg className="h-44 w-44" />
      </div>

      {/* Emoji */}
      <div className="mb-1 text-5xl">{resultType.emoji}</div>

      {/* Type name */}
      <h2
        className="mb-1 text-2xl font-bold"
        style={{ color: resultType.themeColor }}
      >
        {resultType.name}
      </h2>

      {/* Subtitle */}
      <p className="mb-4 text-sm font-medium text-muted-foreground">
        {resultType.subtitle}
      </p>

      {/* Trait badges */}
      <div className="mb-5 flex flex-wrap justify-center gap-2">
        {resultType.traits.map((trait) => (
          <span
            key={trait}
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{
              backgroundColor: `${resultType.themeColor}15`,
              color: resultType.themeColor,
            }}
          >
            #{trait}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="mb-6 text-center text-sm leading-relaxed text-foreground/80">
        {resultType.description}
      </p>

      {/* Examples section */}
      <div className="mb-4 w-full rounded-xl border border-border/50 bg-muted/30 p-4">
        <p className="mb-3 text-center text-xs font-bold text-muted-foreground">
          🔍 이런 행동 하고 있을걸요?
        </p>
        <ul className="space-y-2.5">
          {resultType.examples.map((ex, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-xs leading-relaxed text-foreground/75"
            >
              <span
                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
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
      <div
        className="mb-3 w-full rounded-xl p-4"
        style={{ backgroundColor: `${resultType.themeColor}10` }}
      >
        <p className="mb-2 text-center text-xs font-bold text-muted-foreground">
          💑 연인에게 한마디
        </p>
        <p className="text-center text-xs leading-relaxed text-foreground/70">
          {resultType.commentCoupled}
        </p>
      </div>

      {/* Solo comment */}
      <div className="w-full rounded-xl bg-muted/50 p-4">
        <p className="mb-2 text-center text-xs font-bold text-muted-foreground">
          💫 솔로에게 한마디
        </p>
        <p className="text-center text-xs leading-relaxed text-foreground/70">
          {resultType.commentSolo}
        </p>
      </div>
    </div>
  );
}
