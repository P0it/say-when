"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useQuizStore } from "@/store/quizStore";
import QuizContainer from "@/components/quiz/QuizContainer";
import AnalyzingScreen from "@/components/quiz/AnalyzingScreen";
import { preloadAd, showAd, cleanupAd } from "@/lib/ad";

export default function QuizPage() {
  const router = useRouter();
  const isComplete = useQuizStore((s) => s.isComplete);
  const [showAnalyzing, setShowAnalyzing] = useState(false);

  useEffect(() => {
    preloadAd();
    return () => cleanupAd();
  }, []);

  const goToResult = useCallback(async () => {
    setShowAnalyzing(true);
    await new Promise((r) => setTimeout(r, 1500));
    await showAd();
    router.push("/result");
  }, [router]);

  useEffect(() => {
    if (isComplete) {
      goToResult();
    }
  }, [isComplete, goToResult]);

  if (showAnalyzing) {
    return <AnalyzingScreen />;
  }

  return <QuizContainer />;
}
