import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import BackgroundDotsCSS from "@/components/BackgroundDotsCSS";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "MCL Interactive | AI-Powered Web Solutions",
  description: "Transform your business with custom web development and AI integration. MCL Interactive delivers intelligent digital solutions tailored to your needs.",
  keywords: ["web development", "AI integration", "custom web applications", "digital transformation", "business automation"],
  authors: [{ name: "Maria C. Lima" }],
  openGraph: {
    title: "MCL Interactive | AI-Powered Web Solutions",
    description: "Transform your business with custom web development and AI integration",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6Z3W2S1FLD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6Z3W2S1FLD');
            `,
          }}
        />
      </head>
      <body className={`min-h-full flex flex-col bg-[#FAF7F0] relative ${quicksand.variable}`} suppressHydrationWarning>
        <BackgroundDotsCSS />
        {children}
      </body>
    </html>
  );
}
