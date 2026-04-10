"use client";

import { useState, useEffect } from "react";
import { ThemeProvider } from "@toss/tds-mobile";

export default function TDSProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ minHeight: "100dvh", backgroundColor: "#fff" }} />
    );
  }

  // 토스 앱 환경에서는 TDSMobileAITProvider도 감싸야 하지만,
  // 웹/Vercel 환경에서는 ThemeProvider만으로 충분
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
