import APP_CONFIG from "@/config/config";
import { Metadata } from "next";
import HomePageComponent from "./components/HomePageComponent";

export const metadata: Metadata = {
  title: `Home | ${APP_CONFIG.title}`,
  description: APP_CONFIG.description,
};

export default function HomePage() {
  return (
    <>
      <HomePageComponent />
    </>
  );
}
