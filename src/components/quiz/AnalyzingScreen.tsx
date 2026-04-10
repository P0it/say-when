"use client";

import { motion } from "framer-motion";
import { colors } from "@toss/tds-colors";

export default function AnalyzingScreen() {
  return (
    <div
      className="flex min-h-dvh flex-col items-center justify-center px-6"
      style={{ backgroundColor: colors.white }}
    >
      <motion.div
        className="flex flex-col items-center gap-5"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className="text-7xl"
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          🔍
        </motion.span>
        <div className="flex flex-col items-center gap-2">
          <p className="text-[16px] font-semibold" style={{ color: colors.grey900 }}>
            결과를 분석 중입니다
          </p>
          <p className="text-[14px]" style={{ color: colors.grey500 }}>
            잠시만 기다려주세요..
          </p>
        </div>
      </motion.div>
    </div>
  );
}
