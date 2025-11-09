import "./globals.css";
import ClientLayout from "@/client-layout";
import { ViewTransitions } from "next-view-transitions";

export const metadata = {
  title: "Seenovate Agency | Saman",
  description: "NOV2025 by Saman",
  icons: {
    icon: "/site-logo.png",
    shortcut: "/site-logo.png",
    apple: "/site-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ViewTransitions>
          <ClientLayout>{children}</ClientLayout>
        </ViewTransitions>
      </body>
    </html>
  );
}
