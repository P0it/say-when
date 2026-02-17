"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useQuizStore } from "@/store/quizStore";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function LandingContent() {
  const router = useRouter();
  const reset = useQuizStore((state) => state.reset);

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white px-5">
      <motion.div
        className="flex flex-col items-center gap-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold leading-tight tracking-tight text-foreground"
          variants={itemVariants}
        >
          여사친/남사친
          <br />
          경계 테스트
        </motion.h1>

        <motion.p
          className="text-base text-muted-foreground"
          variants={itemVariants}
        >
          연인이 있는 상태에서,
          <br />
          이성 친구의 이 행동... 가능? 불가능?
        </motion.p>

        <motion.div
          className="flex gap-2 text-3xl"
          variants={itemVariants}
        >
          <span>🏯</span>
          <span>📏</span>
          <span>🧊</span>
          <span>💕</span>
          <span>🗽</span>
          <span>🚩</span>
        </motion.div>

        <motion.p
          className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground"
          variants={itemVariants}
        >
          {"💑 연인이 있다고 가정합니다\n19개의 상황에 답하고\n나의 경계 타입을 확인해보세요!"}
        </motion.p>

        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            className="mt-2 w-full rounded-xl bg-primary px-10 py-6 text-lg font-bold text-primary-foreground shadow-md hover:bg-primary/90"
            onClick={() => router.push("/quiz")}
          >
            테스트 시작하기
          </Button>
        </motion.div>

        <motion.p
          className="mt-2 text-xs text-muted-foreground"
          variants={itemVariants}
        >
          약 2분 소요
        </motion.p>
      </motion.div>
    </div>
  );
}
