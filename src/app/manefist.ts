import APP_CONFIG from "@/config/config";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_CONFIG.title,
    short_name: "MSWE",
    description: APP_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#483b97",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
