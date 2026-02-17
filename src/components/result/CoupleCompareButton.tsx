"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CoupleCompareButton() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="relative">
      <Button
        variant="secondary"
        className="h-12 w-full rounded-xl text-sm font-medium"
        onClick={handleClick}
      >
        커플 비교하기
      </Button>
      {showToast ? (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-lg bg-foreground/90 px-4 py-2 text-xs text-white">
          준비 중이에요!
        </div>
      ) : null}
    </div>
  );
}
