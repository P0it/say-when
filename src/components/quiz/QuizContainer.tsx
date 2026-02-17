"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useQuizStore } from "@/store/quizStore";
import { questions } from "@/data/questions";
import QuestionCard from "@/components/quiz/QuestionCard";
import type { Answer } from "@/types/quiz";

const slideVariants = {
  enter: {
    x: 80,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -80,
    opacity: 0,
  },
};

export default function QuizContainer() {
  const currentQuestionIndex = useQuizStore((s) => s.currentQuestionIndex);
  const answerQuestion = useQuizStore((s) => s.answerQuestion);

  const question = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex / questions.length) * 100;

  const handleAnswer = (answer: Answer) => {
    answerQuestion(answer);
  };

  return (
    <div className="flex min-h-dvh flex-col items-center px-5 py-8">
      <div className="w-full max-w-md">
        <div className="mb-2 flex items-center justify-between">
          <Progress value={progress} className="flex-1" />
          <span className="ml-3 shrink-0 text-sm font-medium text-muted-foreground">
            {currentQuestionIndex + 1} / {questions.length}
          </span>
        </div>
      </div>

      <div className="flex flex-1 w-full max-w-md items-center justify-center">
        <AnimatePresence mode="wait">
          {question ? (
            <motion.div
              key={question.id}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
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
