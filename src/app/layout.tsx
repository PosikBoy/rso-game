import { Metadata } from "next";
import "./globals.scss";
import ReduxProvider from "@/store/ReduxProvider";
import Head from "next/head";
import data from "@/data/data";
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
      <Head>
        {data.map((question, index) => {
          const imageUrl =
            typeof question.config.questionImage === "string"
              ? question.config.questionImage
              : question.config.questionImage?.src; // Берем src, если это StaticImageData

          return imageUrl ? (
            <link key={index} rel="preload" as="image" href={imageUrl} />
          ) : null;
        })}
      </Head>

      <body className="layout">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
