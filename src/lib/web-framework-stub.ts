// Stub for @apps-in-toss/web-framework
// This module is provided at runtime by the Toss app WebView container.
// This stub allows local development and builds to succeed.

export function getAppsInTossGlobals() {
  return {};
}

export function getSafeAreaInsets() {
  return { top: 0, bottom: 0 };
}

function unsupported() {
  return () => {};
}
unsupported.isSupported = () => false;

export const loadFullScreenAd = unsupported;
export const showFullScreenAd = unsupported;

export default {};
