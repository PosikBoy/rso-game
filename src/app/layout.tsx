"use client";

import "./globals.scss";
import { Provider } from "react-redux";
import store, { persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <main className="layout">{children}</main>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
