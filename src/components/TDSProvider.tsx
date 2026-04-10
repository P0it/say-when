"use client";

// Vercel preview용 - TDS 없이 children만 렌더
export default function TDSProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
