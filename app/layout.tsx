import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amrit Sharma | Full Stack Developer",
  description:
    "Amrit Sharma is a passionate Full Stack Developer specializing in building scalable web applications with modern technologies like React, Next.js, Node.js, and more. Explore my portfolio and projects.",
  keywords: [
    "Amrit Sharma",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "AI ML Developer",
  ],
  authors: [{ name: "Amrit Sharma", url: "https://amritsharma.dev" }],
  creator: "Amrit Sharma",
  metadataBase: new URL("https://amritsharma.dev"),
  openGraph: {
    title: "Amrit Sharma — Full Stack Developer",
    description:
      "Passionate developer building fast, responsive, and user-friendly web experiences.",
    url: "https://amritsharma.dev",
    siteName: "Amrit Sharma",
    images: [{ url: "/images/logoMain.png", width: 512, height: 512 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amrit Sharma — Full Stack Developer",
    description: "Passionate developer building fast, responsive web experiences.",
    images: ["/images/logoMain.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LCCK7P9XQM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LCCK7P9XQM');
            `,
          }}
        />
      </head>
      <body className="font-[var(--font-inter)] antialiased" suppressHydrationWarning>
        <div className="aurora-bg" />
        {children}
      </body>
    </html>
  );
}
