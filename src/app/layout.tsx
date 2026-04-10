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
  title: "Where is the Line? - 여사친/남사친 경계 테스트",
  description:
    "이 행동, 친구니까 가능한 거야 아닌 거야? 이성 친구 사이의 경계를 테스트해보세요!",
  openGraph: {
    title: "여사친/남사친 경계 테스트",
    description: "내 이성 친구 경계는 어디? 지금 테스트해보세요!",
    type: "website",
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
