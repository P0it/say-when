"use client";

import { useState } from "react";
import type { ResultType, ResultTypeId } from "@/types/quiz";
import type { ComponentType } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
      <h3 className="mb-3 text-center text-sm font-semibold text-muted-foreground">
        다른 유형 구경하기
      </h3>
      <div className="flex flex-col gap-2">
        {otherTypes.map((rt) => {
          const CharacterSvg = characterMap[rt.id];
          const isExpanded = expandedId === rt.id;

          return (
            <button
              key={rt.id}
              className="w-full rounded-xl border border-border bg-white p-3 text-left transition-colors hover:bg-muted/50"
              onClick={() => handleToggle(rt.id)}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${rt.themeColor}20` }}
                >
                  <CharacterSvg className="h-8 w-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold" style={{ color: rt.themeColor }}>
                      {rt.name}
                    </span>
                    <span className="text-base">{rt.emoji}</span>
                  </div>
                  <p className="truncate text-xs text-muted-foreground">
                    {rt.subtitle}
                  </p>
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                />
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
                    <p className="mt-3 text-xs leading-relaxed text-foreground/70">
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
