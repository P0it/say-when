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
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
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
      className="flex min-h-dvh flex-col items-center px-5 py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-2 text-sm font-medium text-muted-foreground">
        당신의 이성 친구 경계 타입은...
      </motion.div>

      <motion.div variants={itemVariants} className="w-full">
        <ResultCard resultType={resultType} />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-6 w-full">
        <ShareSection resultType={resultType} />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-3 w-full">
        <CoupleCompareButton />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-8 w-full">
        <OtherTypes currentId={resultTypeId} allTypes={resultTypes} />
      </motion.div>

      <motion.div variants={itemVariants} className="mt-6 w-full">
        <Button
          variant="ghost"
          className="w-full text-muted-foreground"
          onClick={handleRetry}
        >
          다시 테스트하기
        </Button>
      </motion.div>
    </motion.div>
  );
}
