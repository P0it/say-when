"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useQuizStore } from "@/store/quizStore";
import { resultTypes } from "@/data/resultTypes";
import ResultCard from "@/components/result/ResultCard";
import ShareSection from "@/components/result/ShareSection";
import OtherTypes from "@/components/result/OtherTypes";
import type { ResultTypeId } from "@/types/quiz";

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

const validTypeIds: ResultTypeId[] = ["concrete", "readmaster", "caseby", "swiss", "vitamin", "breaker"];

function ResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const storeResultTypeId = useQuizStore((s) => s.resultTypeId);
  const reset = useQuizStore((s) => s.reset);

  const typeParam = searchParams.get("type") as ResultTypeId | null;
  const resultTypeId = (typeParam && validTypeIds.includes(typeParam))
    ? typeParam
    : storeResultTypeId;

  const isSharedView = !!typeParam;

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
          {isSharedView ? "🔍 이 사람의 애사친 경계 타입은" : "🎯 당신의 애사친 경계 타입은"}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <ResultCard resultType={resultType} />
      </motion.div>

      <motion.div variants={itemVariants} className="my-8 h-2 -mx-6 bg-[#F9FAFB]" />

      {isSharedView ? (
        /* 공유 받은 사람: 나도 테스트하기 */
        <motion.div variants={itemVariants} className="w-full flex flex-col gap-4">
          <div className="text-center">
            <p className="text-[16px] font-bold text-[#191F28]">나의 경계 유형은 뭘까?</p>
            <p className="mt-1 text-[13px] text-[#8B95A1]">직접 테스트해보세요</p>
          </div>
          <button
            className="h-14 w-full rounded-2xl bg-[#3182F6] text-[17px] font-bold text-white active:bg-[#2272EB] transition-colors"
            onClick={() => router.push("/")}
          >
            나도 테스트하기
          </button>
        </motion.div>
      ) : (
        /* 내 결과: 공유 + 다른 유형 + 다시 테스트 */
        <>
          <motion.div variants={itemVariants} className="mb-4">
            <p className="text-[16px] font-bold text-[#191F28]">공유하기</p>
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
        </>
      )}
    </motion.div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-white" />}>
      <ResultContent />
    </Suspense>
  );
}
