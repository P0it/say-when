"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@toss/tds-mobile";
import { colors } from "@toss/tds-colors";
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
      {/* Emoji hero */}
      <span className="text-8xl">{question.emoji}</span>

      {/* Situation card */}
      <div
        className="w-full rounded-2xl px-5 py-6"
        style={{ backgroundColor: colors.grey50 }}
      >
        <p
          className="text-[16px] font-medium leading-[1.7] tracking-tight"
          style={{ color: colors.grey800 }}
        >
          {question.situation}
        </p>
      </div>

      {/* Answer buttons */}
      <div className="flex w-full gap-3">
        <motion.div className="flex-1" whileTap={{ scale: 0.96 }}>
          <Button
            color="primary"
            variant={selected === "possible" ? "fill" : "weak"}
            size="xlarge"
            display="full"
            disabled={selected !== null}
            onClick={() => handleSelect("possible")}
          >
            가능
          </Button>
        </motion.div>

        <motion.div className="flex-1" whileTap={{ scale: 0.96 }}>
          <Button
            color="danger"
            variant={selected === "impossible" ? "fill" : "weak"}
            size="xlarge"
            display="full"
            disabled={selected !== null}
            onClick={() => handleSelect("impossible")}
          >
            불가능
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
