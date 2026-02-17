"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
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
    <div className="flex flex-col gap-2">
      <Button
        className="h-12 w-full rounded-xl bg-[#FEE500] text-sm font-medium text-[#391B1B] hover:bg-[#FDD835]"
        onClick={handleKakaoShare}
      >
        카카오톡으로 공유하기
      </Button>
      <Button
        variant="outline"
        className="h-12 w-full rounded-xl text-sm font-medium"
        onClick={handleCopyLink}
      >
        {copied ? "링크가 복사되었어요!" : "링크 복사하기"}
      </Button>
    </div>
  );
}
