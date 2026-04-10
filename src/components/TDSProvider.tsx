"use client";

import { useState, useEffect } from "react";
import { TDSMobileAITProvider } from "@toss/tds-mobile-ait";
import { ThemeProvider } from "@toss/tds-mobile";

export default function TDSProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR/prerender: 빈 화면 (TDS 컴포넌트가 ThemeProvider 없이 렌더되면 에러남)
  // 클라이언트 마운트 후: TDS Provider로 감싸서 정상 렌더
  if (!mounted) {
    return (
      <div style={{ minHeight: "100dvh", backgroundColor: "#fff" }} />
    );
  }

  return (
    <TDSMobileAITProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </TDSMobileAITProvider>
  );
}
