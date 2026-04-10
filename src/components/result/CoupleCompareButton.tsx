"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoupleCompareButton() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="relative">
      <button
        className="h-[52px] w-full rounded-2xl bg-[#F2F4F6] text-[15px] font-medium text-[#333D4B] active:bg-[#E5E8EB] transition-colors"
        onClick={handleClick}
      >
        💑 커플 비교하기
      </button>
      <AnimatePresence>
        {showToast ? (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute -top-11 left-1/2 -translate-x-1/2 rounded-xl bg-[#191F28] px-4 py-2.5 text-[13px] font-medium text-white shadow-lg"
          >
            준비 중이에요!
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
