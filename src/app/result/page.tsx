"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useQuizStore } from "@/store/quizStore";
import { resultTypes } from "@/data/resultTypes";
import ResultCard from "@/components/result/ResultCard";
import ShareSection from "@/components/result/ShareSection";
import OtherTypes from "@/components/result/OtherTypes";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ResultPage() {
  const router = useRouter();
  const resultTypeId = useQuizStore((s) => s.resultTypeId);
  const reset = useQuizStore((s) => s.reset);

  useEffect(() => {
    if (!resultTypeId) {
      router.replace("/");
    }
  }, [resultTypeId, router]);

  if (!resultTypeId) return null;

  const resultType = resultTypes.find((r) => r.id === resultTypeId);
  if (!resultType) return null;

  const handleRetry = () => {
    reset();
    router.push("/");
  };

  return (
    <motion.div
      className="flex min-h-dvh flex-col bg-white px-6 pb-10 pt-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-6 flex justify-center">
        <div className="rounded-full px-5 py-2 text-[14px] font-semibold bg-[#E8F3FF] text-[#3182F6]">
          🎯 당신의 애사친 경계 타입은
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <ResultCard resultType={resultType} />
      </motion.div>

      <motion.div variants={itemVariants} className="my-8 h-2 -mx-6 bg-[#F9FAFB]" />

      <motion.div variants={itemVariants} className="mb-4">
        <p className="text-[16px] font-bold text-[#191F28]">결과 공유하기</p>
        <p className="mt-1 text-[13px] text-[#8B95A1]">연인이나 친구에게 내 결과를 보여주세요</p>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <ShareSection resultType={resultType} />
      </motion.div>

      <motion.div variants={itemVariants} className="my-8 h-2 -mx-6 bg-[#F9FAFB]" />

      <motion.div variants={itemVariants} className="w-full">
        <OtherTypes currentId={resultTypeId} allTypes={resultTypes} />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8">
        <button
          className="h-14 w-full rounded-2xl bg-[#F2F4F6] text-[16px] font-bold text-[#6B7684] active:bg-[#E5E8EB] transition-colors"
          onClick={handleRetry}
        >
          다시 테스트하기
        </button>
      </motion.div>
    </motion.div>
  );
}
