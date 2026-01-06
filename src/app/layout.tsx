import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Great_Vibes, Montserrat } from "next/font/google"; // Using Google Fonts via Next.js
import "./globals.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nahas & Nihala | Save the Date",
  description: "We joyfully invite you to join us on Sunday, 26 January 2025 at HM Hall kidangazhi. Reception 4 to 7 pm.",
  openGraph: {
    title: "Nahas & Nihala | Save the Date",
    description: "Join us in celebrating our wedding reception on January 26, 2025.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${greatVibes.variable} ${montserrat.variable} h-full m-0 p-0 overflow-x-hidden flex justify-center items-center`}>
        <div id="app" className="w-full h-full relative">
            {children}
        </div>
      </body>
    </html>
  );
}
