"use client";

import { useState, useEffect } from "react";
import { TDSMobileAITProvider } from "@toss/tds-mobile-ait";
import { ThemeProvider } from "@toss/tds-mobile";

export default function TDSProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ThemeProvider is always rendered (SSR + client) so TDS components work during prerender.
  // TDSMobileAITProvider (which depends on @apps-in-toss/web-framework runtime) is client-only.
  const content = <ThemeProvider>{children}</ThemeProvider>;

  if (!mounted) {
    return content;
  }

  return (
    <TDSMobileAITProvider>
      {content}
    </TDSMobileAITProvider>
  );
}
