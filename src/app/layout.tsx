import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  weight: ["200"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-regular",
});

export const metadata: Metadata = {
  title: "Welcome to Deyasini's Birthday",
  description: "Deyasini's Birthday",
};
const dataWebsiteId = process.env.UMAMI_ID;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://cloud.umami.is/script.js"
          data-website-id={`${dataWebsiteId}`}
        ></script>
      </head>
      <body className={`${inter} ${inter} antialiased`}>{children}</body>
    </html>
  );
}
