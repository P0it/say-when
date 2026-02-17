import { create } from "zustand";
import type { Answer, ResultTypeId } from "@/types/quiz";
import { questions } from "@/data/questions";
import { calculateResult } from "@/lib/scoring";

interface QuizStore {
  answers: Answer[];
  currentQuestionIndex: number;
  isComplete: boolean;
  resultTypeId: ResultTypeId | null;
  answerQuestion: (answer: Answer) => void;
  reset: () => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  answers: [],
  currentQuestionIndex: 0,
  isComplete: false,
  resultTypeId: null,

  answerQuestion: (answer: Answer) => {
    set((state) => {
      const newAnswers = [...state.answers, answer];
      const nextIndex = state.currentQuestionIndex + 1;
      const isComplete = nextIndex >= questions.length;

      if (isComplete) {
        return {
          answers: newAnswers,
          currentQuestionIndex: nextIndex,
          isComplete: true,
          resultTypeId: calculateResult(newAnswers),
        };
      }

      return {
        answers: newAnswers,
        currentQuestionIndex: nextIndex,
      };
    });
  },

  reset: () =>
    set({
      answers: [],
      currentQuestionIndex: 0,
      isComplete: false,
      resultTypeId: null,
    }),
}));
