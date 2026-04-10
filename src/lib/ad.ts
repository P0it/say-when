// 앱인토스 전면 광고 (Interstitial Ad) 유틸리티
// 토스 앱 환경에서만 동작하며, 로컬/웹에서는 스킵됩니다.

let isAdLoaded = false;
let adLoadUnregister: (() => void) | null = null;

// 앱인토스 콘솔에서 발급받은 광고 그룹 ID로 교체하세요
const AD_GROUP_ID = process.env.NEXT_PUBLIC_AD_GROUP_ID ?? "ait-ad-test-interstitial-id";

export function preloadAd() {
  if (typeof window === "undefined") return;

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { loadFullScreenAd } = require("@apps-in-toss/web-framework");

    if (!loadFullScreenAd.isSupported()) return;

    adLoadUnregister = loadFullScreenAd({
      options: { adGroupId: AD_GROUP_ID },
      onEvent: (event: { type: string }) => {
        if (event.type === "loaded") {
          isAdLoaded = true;
        }
      },
      onError: (error: unknown) => {
        console.warn("광고 로드 실패:", error);
      },
    });
  } catch {
    // 로컬/웹 환경에서는 web-framework가 stub이므로 무시
  }
}

export function showAd(): Promise<void> {
  return new Promise((resolve) => {
    if (!isAdLoaded) {
      resolve();
      return;
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { showFullScreenAd } = require("@apps-in-toss/web-framework");

      if (!showFullScreenAd.isSupported()) {
        resolve();
        return;
      }

      showFullScreenAd({
        options: { adGroupId: AD_GROUP_ID },
        onEvent: (event: { type: string }) => {
          if (event.type === "dismissed" || event.type === "failedToShow") {
            isAdLoaded = false;
            resolve();
          }
        },
        onError: () => {
          resolve();
        },
      });
    } catch {
      resolve();
    }
  });
}

export function cleanupAd() {
  if (adLoadUnregister) {
    adLoadUnregister();
    adLoadUnregister = null;
  }
  isAdLoaded = false;
}
