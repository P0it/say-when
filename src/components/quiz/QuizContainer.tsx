"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useQuizStore } from "@/store/quizStore";
import { questions } from "@/data/questions";
import QuestionCard from "@/components/quiz/QuestionCard";
import { ProgressBar } from "@toss/tds-mobile";
import { colors } from "@toss/tds-colors";
import type { Answer } from "@/types/quiz";

const slideVariants = {
  enter: { x: 60, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -60, opacity: 0 },
};

export default function QuizContainer() {
  const currentQuestionIndex = useQuizStore((s) => s.currentQuestionIndex);
  const answerQuestion = useQuizStore((s) => s.answerQuestion);
  const goBack = useQuizStore((s) => s.goBack);

  const question = questions[currentQuestionIndex];
  const progress = currentQuestionIndex / questions.length;
  const canGoBack = currentQuestionIndex > 0;

  const handleAnswer = (answer: Answer) => {
    answerQuestion(answer);
  };

  return (
    <div className="flex min-h-dvh flex-col" style={{ backgroundColor: colors.white }}>
      {/* Top navigation bar */}
      <div className="sticky top-0 z-10 px-6 pb-3 pt-4" style={{ backgroundColor: colors.white }}>
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {canGoBack ? (
              <button
                onClick={goBack}
                className="flex items-center justify-center"
                style={{ color: colors.grey600 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            ) : (
              <div className="w-5" />
            )}
            <span className="text-[14px] font-bold" style={{ color: colors.blue500 }}>
              Q{currentQuestionIndex + 1}
            </span>
          </div>
          <span className="text-[13px] font-medium" style={{ color: colors.grey400 }}>
            {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>
        <ProgressBar
          progress={progress}
          size="normal"
          animate
        />
      </div>

      {/* Question area */}
      <div className="flex flex-1 items-center justify-center px-6 py-6">
        <AnimatePresence mode="wait">
          {question ? (
            <motion.div
              key={question.id}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const }}
              className="w-full"
            >
              <QuestionCard question={question} onAnswer={handleAnswer} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
