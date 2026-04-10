"use client";

import { useState } from "react";
import type { ResultType } from "@/types/quiz";

interface ShareSectionProps {
  resultType: ResultType;
}

export default function ShareSection({ resultType }: ShareSectionProps) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/result?type=${resultType.id}`;
  };

  const shareText = `나의 애사친 경계 타입은 "${resultType.name}" ${resultType.emoji}\n${resultType.shareLine}`;

  const handleShare = async () => {
    const shareUrl = getShareUrl();

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "애사친 경계 테스트",
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        // 사용자가 취소하거나 미지원
      }
    }

    await handleCopyLink();
  };

  const handleCopyLink = async () => {
    try {
      const shareUrl = getShareUrl();
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard 미지원
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        className="h-[52px] w-full rounded-2xl bg-[#3182F6] text-[15px] font-bold text-white active:bg-[#2272EB] transition-colors"
        onClick={handleShare}
      >
        결과 공유하기
      </button>
      <button
        className="h-[52px] w-full rounded-2xl bg-[#F2F4F6] text-[15px] font-medium text-[#333D4B] active:bg-[#E5E8EB] transition-colors"
        onClick={handleCopyLink}
      >
        {copied ? "복사 완료!" : "링크 복사하기"}
      </button>
    </div>
  );
}
