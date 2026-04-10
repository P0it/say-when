"use client";

import type { ResultType } from "@/types/quiz";

interface ShareSectionProps {
  resultType: ResultType;
}

export default function ShareSection({ resultType }: ShareSectionProps) {
  const getShareUrl = () => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}/result?type=${resultType.id}`;
  };

  const handleShareResult = async () => {
    const shareUrl = getShareUrl();
    const text = `나의 애사친 경계 타입은 "${resultType.name}" ${resultType.emoji}\n${resultType.shareLine}`;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: `애사친 경계 테스트 결과: ${resultType.name}`,
          text,
          url: shareUrl,
        });
        return;
      } catch {
        // 취소 또는 미지원
      }
    }

    try {
      await navigator.clipboard.writeText(`${text}\n${shareUrl}`);
      alert("링크가 복사되었어요!");
    } catch {
      // 미지원
    }
  };

  const handleShareTest = async () => {
    const shareUrl = typeof window !== "undefined" ? window.location.origin : "";
    const text = "애사친 경계 테스트 🤔\n이 행동, 친구니까 가능한 거 맞아?\n너의 경계 유형을 알아봐!";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "애사친 경계 테스트",
          text,
          url: shareUrl,
        });
        return;
      } catch {
        // 취소 또는 미지원
      }
    }

    try {
      await navigator.clipboard.writeText(`${text}\n${shareUrl}`);
      alert("링크가 복사되었어요!");
    } catch {
      // 미지원
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <button
        className="h-[52px] w-full rounded-2xl bg-[#3182F6] text-[15px] font-bold text-white active:bg-[#2272EB] transition-colors"
        onClick={handleShareResult}
      >
        내 결과 공유하기
      </button>
      <button
        className="h-[52px] w-full rounded-2xl bg-[#F2F4F6] text-[15px] font-medium text-[#333D4B] active:bg-[#E5E8EB] transition-colors"
        onClick={handleShareTest}
      >
        친구에게 테스트 공유하기
      </button>
    </div>
  );
}
