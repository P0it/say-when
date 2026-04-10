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

      <motion.div variants={itemVariants} className="mb-4">
        <p className="text-[16px] font-bold text-[#191F28]">
          {isSharedView ? "나도 테스트하기" : "공유하기"}
        </p>
        <p className="mt-1 text-[13px] text-[#8B95A1]">
          {isSharedView ? "내 애사친 경계 유형은 뭘까?" : "연인이나 친구에게 내 결과를 보여주세요"}
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full flex flex-col gap-3">
        {isSharedView ? (
          <button
            className="h-[52px] w-full rounded-2xl bg-[#3182F6] text-[15px] font-bold text-white active:bg-[#2272EB] transition-colors"
            onClick={() => router.push("/")}
          >
            테스트 시작하기
          </button>
        ) : (
          <ShareSection resultType={resultType} />
        )}

        {/* 테스트 퍼뜨리기 - 항상 노출 */}
        <ShareTestButton />
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
          {isSharedView ? "나도 테스트하기" : "다시 테스트하기"}
        </button>
      </motion.div>
    </motion.div>
  );
}

function ShareTestButton() {
  const handleShareTest = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.origin : "";
    const text = "애사친 경계 테스트 🤔\n이 행동, 친구니까 가능한 거 맞아?\n너의 경계 유형을 알아봐!";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "애사친 경계 테스트",
          text,
          url: shareUrl,
        });
        return;
      } catch {
        // 취소 또는 미지원
      }
    }

    // 폴백: 클립보드 복사
    try {
      await navigator.clipboard.writeText(`${text}\n${shareUrl}`);
    } catch {
      // 미지원
    }
  };

  return (
    <button
      className="h-[52px] w-full rounded-2xl bg-[#F2F4F6] text-[15px] font-medium text-[#333D4B] active:bg-[#E5E8EB] transition-colors"
      onClick={handleShareTest}
    >
      친구에게 테스트 공유하기
    </button>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-dvh bg-white" />}>
      <ResultContent />
    </Suspense>
  );
}
