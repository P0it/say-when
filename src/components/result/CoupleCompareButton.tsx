"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@toss/tds-mobile";
import { colors } from "@toss/tds-colors";

export default function CoupleCompareButton() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="relative">
      <Button
        color="dark"
        variant="weak"
        size="xlarge"
        display="full"
        onClick={handleClick}
      >
        💑 커플 비교하기
      </Button>
      <AnimatePresence>
        {showToast ? (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute -top-11 left-1/2 -translate-x-1/2 rounded-xl px-4 py-2.5 text-[13px] font-medium shadow-lg"
            style={{ backgroundColor: colors.grey900, color: colors.white }}
          >
            준비 중이에요!
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
