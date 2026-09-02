import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: ["/", "/help-center", "/compare", "/uk", "/india", "/eu", "/llms.txt"],
      },
    ],
    sitemap: "https://erp.mintsglobal.ae/sitemap.xml",
  };
}
