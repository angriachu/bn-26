import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Build Nest",
    short_name: "Build Nest",
    description: "Construction management SaaS platform for modern teams.",
    start_url: "/",
    display: "standalone",
    background_color: "#031421",
    theme_color: "#25C7D9",
    icons: [
      {
        src: "/brand/buildnest-pwa-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/brand/buildnest-pwa-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
