"use client";

import { useState } from "react";
import { shareToKakao, copyLink } from "@/lib/kakao";
import { Button } from "@toss/tds-mobile";
import { colors } from "@toss/tds-colors";
import type { ResultType } from "@/types/quiz";
import type { CSSProperties } from "react";

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
      <Button
        color="dark"
        variant="fill"
        size="xlarge"
        display="full"
        onClick={handleKakaoShare}
        style={{
          "--button-background-color": "#FEE500",
          "--button-color": colors.grey900,
        } as CSSProperties}
      >
        카카오톡으로 공유하기
      </Button>
      <Button
        color="dark"
        variant="weak"
        size="xlarge"
        display="full"
        onClick={handleCopyLink}
      >
        {copied ? "링크가 복사되었어요!" : "링크 복사하기"}
      </Button>
    </div>
  );
}
