"use client";

import { useState } from "react";
import type { ResultType, ResultTypeId } from "@/types/quiz";
import type { ComponentType } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";

const characterMap: Record<ResultTypeId, ComponentType<{ className?: string }>> = {
  concrete: dynamic(() => import("@/components/characters/ConcreteCharacter")),
  readmaster: dynamic(() => import("@/components/characters/ReadmasterCharacter")),
  caseby: dynamic(() => import("@/components/characters/CasebyCharacter")),
  swiss: dynamic(() => import("@/components/characters/SwissCharacter")),
  vitamin: dynamic(() => import("@/components/characters/VitaminCharacter")),
  breaker: dynamic(() => import("@/components/characters/BreakerCharacter")),
};

interface OtherTypesProps {
  currentId: ResultTypeId;
  allTypes: ResultType[];
}

export default function OtherTypes({ currentId, allTypes }: OtherTypesProps) {
  const [expandedId, setExpandedId] = useState<ResultTypeId | null>(null);
  const otherTypes = allTypes.filter((t) => t.id !== currentId);

  const handleToggle = (id: ResultTypeId) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full">
      <h3 className="mb-4 text-[16px] font-bold text-[#191F28]">
        다른 유형 구경하기
      </h3>
      <div className="flex flex-col gap-2">
        {otherTypes.map((rt) => {
          const CharacterSvg = characterMap[rt.id];
          const isExpanded = expandedId === rt.id;

          return (
            <button
              key={rt.id}
              className="w-full rounded-2xl p-4 text-left transition-colors"
              style={{ backgroundColor: isExpanded ? "#F2F4F6" : "#F9FAFB" }}
              onClick={() => handleToggle(rt.id)}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${rt.themeColor}18` }}
                >
                  <CharacterSvg className="h-8 w-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[14px] font-bold" style={{ color: rt.themeColor }}>
                      {rt.name}
                    </span>
                    <span className="text-[16px]">{rt.emoji}</span>
                  </div>
                  <p className="mt-0.5 truncate text-[12px] text-[#B0B8C1]">
                    {rt.subtitle}
                  </p>
                </div>
                <svg
                  className={`h-5 w-5 text-[#B0B8C1] transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <AnimatePresence>
                {isExpanded ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-[13px] leading-[1.7] text-[#6B7684]">
                      {rt.description}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </button>
          );
        })}
      </div>
    </div>
  );
}
