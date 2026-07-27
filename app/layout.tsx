import type { ReactNode } from "react";
import "./globals.css";

const SITO_IN_MANUTENZIONE = true;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  if (SITO_IN_MANUTENZIONE) {
    return (
      <html lang="it">
        <body
          style={{
            margin: 0,
            width: "100%",
            minHeight: "100vh",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            color: "#111111",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          <main
            style={{
              width: "100%",
              padding: "24px",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(32px, 6vw, 64px)",
                lineHeight: 1.1,
                fontWeight: 700,
              }}
            >
              Sito in manutenzione
            </h1>
          </main>
        </body>
      </html>
    );
  }

  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}