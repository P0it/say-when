import type { Metadata } from "next";
import { resultTypes } from "@/data/resultTypes";

type Props = {
  searchParams: Promise<{ type?: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  let typeId: string | undefined;
  try {
    const params = await props.searchParams;
    typeId = params?.type;
  } catch {
    // 프리렌더 시 searchParams 미지원
  }

  const resultType = typeId ? resultTypes.find((r) => r.id === typeId) : undefined;

  if (resultType) {
    return {
      title: `${resultType.name} ${resultType.emoji} - 애사친 경계 테스트`,
      description: `나의 애사친 경계 타입은 "${resultType.name}" - ${resultType.shareLine}`,
      openGraph: {
        title: `${resultType.name} ${resultType.emoji}`,
        description: resultType.shareLine,
        type: "website",
      },
    };
  }

  return {
    title: "애사친 경계 테스트 결과",
    description: "이 행동, 친구니까 가능한 거 맞아? 내 경계 유형을 확인해보세요!",
    openGraph: {
      title: "애사친 경계 테스트",
      description: "이 행동, 친구니까 가능한 거 맞아?",
      type: "website",
    },
  };
}

export default function ResultLayout({ children }: { children: React.ReactNode }) {
  return children;
}
