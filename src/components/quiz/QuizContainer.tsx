"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useQuizStore } from "@/store/quizStore";
import { questions } from "@/data/questions";
import QuestionCard from "@/components/quiz/QuestionCard";
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
  const progress = ((currentQuestionIndex) / questions.length) * 100;
  const canGoBack = currentQuestionIndex > 0;

  const handleAnswer = (answer: Answer) => {
    answerQuestion(answer);
  };

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <div className="sticky top-0 z-10 bg-white px-6 pb-3 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {canGoBack ? (
              <button onClick={goBack} className="flex items-center justify-center text-[#6B7684]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            ) : (
              <div className="w-5" />
            )}
            <span className="text-[14px] font-bold text-[#3182F6]">
              Q{currentQuestionIndex + 1}
            </span>
          </div>
          <span className="text-[13px] font-medium text-[#B0B8C1]">
            {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>
        {/* Progress bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F2F4F6]">
          <motion.div
            className="h-full rounded-full bg-[#3182F6]"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const }}
          />
        </div>
      </div>

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
