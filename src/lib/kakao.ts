declare global {
  interface Window {
    Kakao?: {
      isInitialized: () => boolean;
      init: (key: string) => void;
      Share: {
        sendDefault: (options: Record<string, unknown>) => void;
      };
    };
  }
}

export function initKakao() {
  if (typeof window === "undefined") return;
  const key = process.env.NEXT_PUBLIC_KAKAO_APP_KEY;
  if (key && window.Kakao && !window.Kakao.isInitialized()) {
    window.Kakao.init(key);
  }
}

export function shareToKakao(resultName: string, shareLine: string) {
  if (typeof window === "undefined") return;

  if (window.Kakao?.isInitialized()) {
    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: `여사친/남사친 경계 테스트 결과: ${resultName}`,
        description: shareLine,
        imageUrl: `${window.location.origin}/og-image.png`,
        link: {
          mobileWebUrl: window.location.origin,
          webUrl: window.location.origin,
        },
      },
      buttons: [
        {
          title: "나도 테스트하기",
          link: {
            mobileWebUrl: window.location.origin,
            webUrl: window.location.origin,
          },
        },
      ],
    });
  } else {
    copyLink();
  }
}

export async function copyLink() {
  try {
    await navigator.clipboard.writeText(window.location.origin);
    return true;
  } catch {
    return false;
  }
}
