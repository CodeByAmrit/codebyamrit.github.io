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
    "Amrit Sharma is a Senior Full Stack Developer and Software Architect specializing in Next.js 16, React 19, and AI-driven solutions. Based in Sonipat, Haryana, he builds scalable cloud-native web applications and high-performance digital products.",
  keywords: [
    "Amrit Sharma",
    "Amrit Sharma developer",
    "Amrit Sharma portfolio",
    "Amrit Sharma full stack developer",
    "Amrit Sharma software engineer",
    "Amrit Sharma Sonipat",
    "Amrit Sharma Haryana",
    "CodeByAmrit",
    "Warrior Amrit",
    "Senior Full Stack Developer",
    "Software Architect India",
    "Next.js 16 Expert",
    "React 19 Specialist",
    "TypeScript Developer",
    "Node.js Backend Architect",
    "Tailwind CSS 4 Professional",
    "MERN Stack Architect",
    "AI/ML Integration Expert",
    "Cloud Computing Solutions",
    "Scalable SaaS Development",
    "Portfolio of Amrit Sharma",
    "Top Web Developers in Haryana",
    "Web Development Expert India",
    "Best Developer in Sonipat",
    "Hire Full Stack Developer India",
    "Remote Software Architect",
    "Freelance Web Developer India",
    "Modern Web Infrastructure Expert",
    "UI/UX Motion Design Specialist",
    "Progressive Web Apps Developer",
    "High-Performance Web Engineering",
    "Secure API Development Express",
    "Docker and Kubernetes Specialist",
    "Redis and MongoDB Expert",
    "Framer Motion Specialist",
    "GSAP Animation Expert",
    "Amrit Sharma Tech",
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
      "Explore the portfolio of Amrit Sharma, a Senior Full Stack Developer crafting scalable cloud-native web solutions and AI-powered products with Next.js and React.",
    url: "https://amritsharma.dev",
    siteName: "Amrit Sharma Portfolio",
    images: [
      {
        url: "/amritnew.png",
        width: 1200,
        height: 630,
        alt: "Amrit Sharma - Senior Full Stack Developer and Software Architect",
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
  verification: {
    other: {
      "msvalidate.01": "9EADA3F447F7F384B551318132A22496",
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Amrit Sharma",
  url: "https://amritsharma.dev",
  image: "https://amritsharma.dev/amritnew.png",
  jobTitle: [
    "Senior Full Stack Developer",
    "Software Architect",
    "Full Stack Engineer",
    "Web Development Specialist"
  ],
  description:
    "Amrit Sharma is a visionary Senior Full Stack Developer and Software Architect specializing in Next.js, React, Node.js, and AI-driven cloud infrastructure.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sonipat",
    addressRegion: "Haryana",
    addressCountry: "India"
  },
  sameAs: [
    "https://github.com/CodeByAmrit",
    "https://www.linkedin.com/in/amrit-sharma-b11b88124",
    "https://twitter.com/warrior_amrit"
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
    "Software Architecture",
    "UI/UX Design",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Docker"
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
