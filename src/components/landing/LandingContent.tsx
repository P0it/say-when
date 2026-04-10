"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useQuizStore } from "@/store/quizStore";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

export default function LandingContent() {
  const router = useRouter();
  const reset = useQuizStore((state) => state.reset);

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <div className="flex min-h-dvh flex-col justify-between px-6 pb-10 pt-16 bg-white">
      <motion.div
        className="flex flex-1 flex-col items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8 flex h-32 w-32 items-center justify-center rounded-full bg-[#E8F3FF]"
          variants={itemVariants}
        >
          <span className="text-7xl">🤔</span>
        </motion.div>

        <motion.div
          className="mb-5 rounded-full px-4 py-1.5 text-[13px] font-semibold bg-[#DCEEFB] text-[#3182F6]"
          variants={itemVariants}
        >
          애사친 경계 테스트
        </motion.div>

        <motion.h1
          className="text-center text-[26px] font-bold leading-[1.4] tracking-tight text-[#191F28]"
          variants={itemVariants}
        >
          이 행동, 친구니까
          <br />
          가능한 거 맞아?
        </motion.h1>

        <motion.p
          className="mt-4 text-center text-[14px] leading-[1.7] text-[#6B7684]"
          variants={itemVariants}
        >
          내 연인이 애사친과 이런 행동을 했을 때
          <br />
          <span className="font-semibold text-[#3182F6]">내가 괜찮은지</span> 판단해 주세요
        </motion.p>

        <motion.p
          className="mt-3 text-[13px] text-[#B0B8C1]"
          variants={itemVariants}
        >
          20문항 · 약 2분
        </motion.p>
      </motion.div>

      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <button
          className="h-14 w-full rounded-2xl bg-[#3182F6] text-[17px] font-bold text-white active:bg-[#2272EB] transition-colors"
          onClick={() => router.push("/quiz")}
        >
          시작하기
        </button>
      </motion.div>
    </div>
  );
}
