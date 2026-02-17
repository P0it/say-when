"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { Question, Answer } from "@/types/quiz";

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: Answer) => void;
}

export default function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  const [selected, setSelected] = useState<Answer | null>(null);

  const handleSelect = useCallback(
    (answer: Answer) => {
      if (selected) return;
      setSelected(answer);
      setTimeout(() => {
        onAnswer(answer);
        setSelected(null);
      }, 250);
    },
    [selected, onAnswer]
  );

  return (
    <div className="flex flex-col items-center gap-10 px-2">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-5xl">{question.emoji}</span>
        <p className="text-lg font-semibold leading-relaxed text-foreground">
          {question.situation}
        </p>
      </div>

      <div className="flex w-full gap-3">
        <motion.div whileTap={{ scale: 0.93 }} className="flex-1">
          <button
            className={`h-14 w-full rounded-2xl text-lg font-bold transition-colors ${
              selected === "possible"
                ? "bg-blue-500 text-white"
                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
            }`}
            disabled={selected !== null}
            onClick={() => handleSelect("possible")}
          >
            가능
          </button>
        </motion.div>

        <motion.div whileTap={{ scale: 0.93 }} className="flex-1">
          <button
            className={`h-14 w-full rounded-2xl text-lg font-bold transition-colors ${
              selected === "impossible"
                ? "bg-rose-500 text-white"
                : "bg-rose-50 text-rose-600 hover:bg-rose-100"
            }`}
            disabled={selected !== null}
            onClick={() => handleSelect("impossible")}
          >
            불가능
          </button>
        </motion.div>
      </div>
    </div>
  );
}
