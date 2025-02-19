import "./globals.scss";
import ReduxProvider from "@/store/ReduxProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="layout">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
