"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";
import QuizContainer from "@/components/quiz/QuizContainer";

export default function QuizPage() {
  const router = useRouter();
  const isComplete = useQuizStore((s) => s.isComplete);

  useEffect(() => {
    if (isComplete) {
      router.push("/result");
    }
  }, [isComplete, router]);

  return isComplete ? null : <QuizContainer />;
}
