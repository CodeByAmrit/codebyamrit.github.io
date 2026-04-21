import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@flaticon/flaticon-uicons/css/all/all.css";

import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";

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
    default: "Amrit Sharma | Senior Full Stack Developer & Software Architect",
    template: "%s | Amrit Sharma",
  },
  description:
    "Amrit Sharma is a Senior Full Stack Developer and Software Architect building high-performance web applications, scalable cloud systems, and AI-driven digital products with Next.js, React, Node.js, and modern backend infrastructure.",
  keywords: [
    "Amrit Sharma",
    "Amrit Sharma developer",
    "Amrit Sharma portfolio",
    "Amrit Sharma full stack developer",
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
  publisher: "Amrit Sharma",
  metadataBase: new URL("https://amritsharma.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amrit Sharma | Senior Full Stack Developer & Software Architect",
    description:
      "Amrit Sharma builds high-performance, secure, and intuitive web experiences with Next.js, React, Node.js, cloud architecture, and modern product engineering.",
    url: "https://amritsharma.dev",
    siteName: "Amrit Sharma Portfolio",
    images: [
      {
        url: "/amritnew.png",
        width: 1200,
        height: 630,
        alt: "Amrit Sharma, Senior Full Stack Developer and Software Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amrit Sharma | Senior Full Stack Developer",
    description:
      "Senior Full Stack Developer crafting scalable cloud-native web solutions and modern digital products.",
    images: ["/amritnew.png"],
    creator: "@warrior_amrit",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amrit Sharma",
  url: "https://amritsharma.dev",
  image: "https://amritsharma.dev/amritnew.png",
  jobTitle: "Senior Full Stack Developer",
  description:
    "Senior Full Stack Developer and Software Architect specializing in Next.js, React, Node.js, cloud architecture, and AI-driven solutions.",
  sameAs: [
    "https://github.com/CodeByAmrit",
    "https://www.linkedin.com/in/amrit-sharma-b11b88124",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Amrit Sharma",
  },
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Cloud Architecture",
    "Full Stack Development",
    "AI/ML Integration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${poppins.variable}`}
    >
      <body
        className="font-[var(--font-inter)] antialiased cursor-none"
        suppressHydrationWarning
      >
        <div className="aurora-bg" />
        <Script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="f42ceef2-9f92-41fe-b7fd-a453ef336035"
          strategy="afterInteractive"
        />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
