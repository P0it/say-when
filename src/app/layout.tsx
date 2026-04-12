import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import TDSProvider from "@/components/TDSProvider";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-sans-var",
});

export const metadata: Metadata = {
  title: "이성친구 경계 테스트 - 이 행동, 친구니까 가능한 거 맞아?",
  description:
    "내 연인이 이성친구과 이런 행동을 했을 때, 나는 괜찮을까? 20문항으로 알아보는 경계 유형 테스트",
  openGraph: {
    title: "이성친구 경계 테스트",
    description: "이 행동, 친구니까 가능한 거 맞아?",
    type: "website",
    images: [{ url: "/og-image.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable} font-sans antialiased`}>
        <TDSProvider>
          <div className="mx-auto min-h-dvh w-full max-w-[430px] bg-white">
            {children}
          </div>
        </TDSProvider>
      </body>
    </html>
  );
}
