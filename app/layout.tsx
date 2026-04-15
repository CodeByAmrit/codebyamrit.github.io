import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "@flaticon/flaticon-uicons/css/all/all.css";

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
  title: {
    default: "Amrit Sharma — Senior Full Stack Developer & Software Architect",
    template: "%s | Amrit Sharma",
  },
  description:
    "Amrit Sharma is a results-driven Senior Full Stack Developer specializing in high-performance web applications, cloud architecture, and AI-driven solutions. Expert in Next.js, React, Node.js, and scaling technical infrastructure.",
  keywords: [
    "Amrit Sharma",
    "Senior Full Stack Developer",
    "Software Engineer Sonipat",
    "Web Development Expert India",
    "Next.js Developer India",
    "MERN Stack Architect",
    "React 19 Specialist",
    "Cloud Computing Solutions",
    "AI/ML Integration Expert",
    "Portfolio of Amrit Sharma",
    "Top Web Developers in Haryana",
  ],
  authors: [{ name: "Amrit Sharma", url: "https://amritsharma.dev" }],
  creator: "Amrit Sharma",
  metadataBase: new URL("https://amritsharma.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amrit Sharma — Senior Full Stack Developer & Software Architect",
    description:
      "Passionate developer building high-performance, secure, and intuitive web experiences using modern technical stacks.",
    url: "https://amritsharma.dev",
    siteName: "Amrit Sharma Portfolio",
    images: [
      {
        url: "/amritnew.png",
        width: 1200,
        height: 630,
        alt: "Amrit Sharma — Software Development Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amrit Sharma | Full Stack developer",
    description:
      "Expert Full Stack developer crafting scalable cloud-native web solutions.",
    images: ["/amritnew.png"],
    creator: "@warrior_amrit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        {/* ... (keep head content same) ... */}
      </head>
      <body className="font-[var(--font-inter)] antialiased cursor-none" suppressHydrationWarning>
        <div className="aurora-bg" />
        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
