"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ko">
      <body>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100dvh", padding: "20px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "12px" }}>문제가 발생했어요</h2>
          <button
            onClick={() => reset()}
            style={{ padding: "12px 24px", borderRadius: "16px", backgroundColor: "#3182F6", color: "#fff", border: "none", fontSize: "15px", fontWeight: 700, cursor: "pointer" }}
          >
            다시 시도하기
          </button>
        </div>
      </body>
    </html>
  );
}
