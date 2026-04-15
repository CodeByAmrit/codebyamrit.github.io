import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://amritsharma.dev";

  // In a real app, you might fetch projects or blog posts here
  const routes = ["", "/#about", "/#skills", "/#projects", "/#experience"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  return routes;
}
