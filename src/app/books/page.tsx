import PageTransitionWrapper from "@/components/Animate/PageTransitionWrapper/PageTransitionWrapper";
import APP_CONFIG from "@/config/config";
import { allBooks } from "contentlayer/generated";
import { Metadata } from "next";
import BooksPageClient from "./BooksPageClient";

export const metadata: Metadata = {
  title: `Books | ${APP_CONFIG.title}`,
  description:
    "Discover recommended tech books and learning resources shared by the MMSWE community.",
  openGraph: {
    title: `Books | ${APP_CONFIG.title}`,
    description:
      "Discover recommended tech books and learning resources shared by the MMSWE community.",
    images: "https://mmswe.com/images/mmswe-seo.png",
  },
};

const BooksPage = async () => {
  const books = [...allBooks].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <PageTransitionWrapper>
      <BooksPageClient books={books} />
    </PageTransitionWrapper>
  );
};

export default BooksPage;
