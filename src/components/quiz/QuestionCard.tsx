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
      }, 300);
    },
    [selected, onAnswer]
  );

  return (
    <div className="flex flex-col items-center gap-10">
      <span className="text-8xl">{question.emoji}</span>

      <div className="w-full rounded-2xl bg-[#F9FAFB] px-5 py-6">
        <p className="text-[16px] font-medium leading-[1.7] tracking-tight text-[#333D4B]">
          {question.situation}
        </p>
      </div>

      <div className="flex w-full gap-3">
        <motion.button
          whileTap={{ scale: 0.96 }}
          className={`flex-1 h-[52px] rounded-2xl text-[16px] font-bold transition-all duration-200 ${
            selected === "possible"
              ? "bg-[#3182F6] text-white"
              : "bg-[#E8F3FF] text-[#3182F6]"
          }`}
          disabled={selected !== null}
          onClick={() => handleSelect("possible")}
        >
          가능
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.96 }}
          className={`flex-1 h-[52px] rounded-2xl text-[16px] font-bold transition-all duration-200 ${
            selected === "impossible"
              ? "bg-[#F04452] text-white"
              : "bg-[#FFF0F0] text-[#F04452]"
          }`}
          disabled={selected !== null}
          onClick={() => handleSelect("impossible")}
        >
          불가능
        </motion.button>
      </div>
    </div>
  );
}
