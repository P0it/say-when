"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useQuizStore } from "@/store/quizStore";
import { resultTypes } from "@/data/resultTypes";
import ResultCard from "@/components/result/ResultCard";
import ShareSection from "@/components/result/ShareSection";
import CoupleCompareButton from "@/components/result/CoupleCompareButton";
import OtherTypes from "@/components/result/OtherTypes";
import { Button } from "@toss/tds-mobile";
import { colors } from "@toss/tds-colors";

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
      className="flex min-h-dvh flex-col px-6 pb-10 pt-8"
      style={{ backgroundColor: colors.white }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header badge */}
      <motion.div variants={itemVariants} className="mb-6 flex justify-center">
        <div
          className="rounded-full px-5 py-2 text-[14px] font-semibold"
          style={{ backgroundColor: colors.blue50, color: colors.blue500 }}
        >
          🎯 당신의 이성 친구 경계 타입은
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <ResultCard resultType={resultType} />
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        className="my-8 h-2 -mx-6"
        style={{ backgroundColor: colors.grey50 }}
      />

      {/* Share section header */}
      <motion.div variants={itemVariants} className="mb-4">
        <p className="text-[16px] font-bold" style={{ color: colors.grey900 }}>
          친구에게 공유하기
        </p>
        <p className="mt-1 text-[13px]" style={{ color: colors.grey500 }}>
          친구의 경계 유형도 알아보세요
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="w-full flex flex-col gap-3">
        <ShareSection resultType={resultType} />
        <CoupleCompareButton />
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        className="my-8 h-2 -mx-6"
        style={{ backgroundColor: colors.grey50 }}
      />

      <motion.div variants={itemVariants} className="w-full">
        <OtherTypes currentId={resultTypeId} allTypes={resultTypes} />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8">
        <Button
          color="dark"
          variant="weak"
          size="xlarge"
          display="full"
          onClick={handleRetry}
        >
          다시 테스트하기
        </Button>
      </motion.div>
    </motion.div>
  );
}
