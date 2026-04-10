"use client";

import { useState } from "react";
import { shareToKakao, copyLink } from "@/lib/kakao";
import type { ResultType } from "@/types/quiz";

interface ShareSectionProps {
  resultType: ResultType;
}

export default function ShareSection({ resultType }: ShareSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleKakaoShare = () => {
    shareToKakao(resultType.name, resultType.shareLine);
  };

  const handleCopyLink = async () => {
    const success = await copyLink();
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        className="h-[52px] w-full rounded-2xl bg-[#FEE500] text-[15px] font-bold text-[#191F28] active:bg-[#FDD835] transition-colors"
        onClick={handleKakaoShare}
      >
        카카오톡으로 공유하기
      </button>
      <button
        className="h-[52px] w-full rounded-2xl bg-[#F2F4F6] text-[15px] font-medium text-[#333D4B] active:bg-[#E5E8EB] transition-colors"
        onClick={handleCopyLink}
      >
        {copied ? "링크가 복사되었어요!" : "링크 복사하기"}
      </button>
    </div>
  );
}
