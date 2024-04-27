import type { Metadata } from "next";
import { Providers } from "./providers/providers";
import { SessionProviders } from "./providers/sessionProviders";
import "./globals.css";
import Header from "./components/header/Header";

export const metadata: Metadata = {
  title: "TravelDiary",
  description: "Organiser, plannifier, budgeter ses voyages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SessionProviders>
            <Header />
            {children}
          </SessionProviders>
        </Providers>
      </body>
    </html>
  );
}
