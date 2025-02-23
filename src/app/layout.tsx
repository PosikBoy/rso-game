import { Metadata } from "next";
import "./globals.scss";
import ReduxProvider from "@/store/ReduxProvider";
export const metadata: Metadata = {
  title: "Интеллектуальная игра | ШВСО'25 от МосРСО",
  description: "Своя игра для Школы вожатых 2025 от МосРСО",

  openGraph: {
    locale: "ru",
    url: "/",
    title: "Интеллектуальная игра | ШВСО'25 от МосРСО",
    description: "Своя игра для Школы вожатых 2025 от МосРСО",
    siteName: "Это Москва! Это МосРСО!",
  },
  robots: {
    index: false,
    follow: false,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <main className="layout">
          <ReduxProvider>{children}</ReduxProvider>
        </main>
      </body>
    </html>
  );
}
