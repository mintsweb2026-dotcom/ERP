import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://erp.mintsglobal.ae";
  const lastModified = new Date();

  const coreRoutes = [
    { path: "", changeFrequency: "daily" as const, priority: 1.0 },
    { path: "/uk", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/india", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/eu", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/pricing", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/compare", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/compare/vs-zoho", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/compare/vs-sap", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/compare/vs-tally", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/compare/vs-sage", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/compare/vs-monday", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/help-center", changeFrequency: "weekly" as const, priority: 0.85 },
    { path: "/help-center/faq", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/help-center/handbook", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/help-center/product-doc", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/help-center/user-manual", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/security", changeFrequency: "monthly" as const, priority: 0.75 },
    { path: "/changelog", changeFrequency: "weekly" as const, priority: 0.75 },
    { path: "/accessibility", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/terms", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/license", changeFrequency: "monthly" as const, priority: 0.6 },
  ];

  return coreRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
