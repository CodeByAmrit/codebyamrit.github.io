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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Amrit Sharma",
              "url": "https://amritsharma.dev",
              "image": "https://amritsharma.dev/amritnew.png",
              "sameAs": [
                "https://github.com/CodeByAmrit",
                "https://www.linkedin.com/in/amrit-sharma-b11b88124",
                "https://www.instagram.com/warrior_amrit"
              ],
              "jobTitle": "Senior Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance / Self-Employed"
              },
              "description": "Amrit Sharma is a Senior Full Stack Developer specializing in high-performance web applications and cloud architecture.",
              "knowsAbout": [
                "Web Development",
                "React",
                "Next.js",
                "Node.js",
                "Cloud Architecture",
                "AI/ML",
                "UI/UX Design"
              ]
            }),
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
