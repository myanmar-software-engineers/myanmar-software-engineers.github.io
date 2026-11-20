import PageTransitionWrapper from "@/components/Animate/PageTransitionWrapper/PageTransitionWrapper";
import APP_CONFIG from "@/config/config";
import { Metadata } from "next";
import { allBlogs } from "content-collections";
import { compareDesc } from "date-fns";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: `Blog | ${APP_CONFIG.title}`,
  description: APP_CONFIG.description,
  openGraph: {
    title: `Blog | ${APP_CONFIG.title}`,
    description: APP_CONFIG.description,
    images: "https://mmswe.com/images/mmswe-seo.png",
  },
};

const BlogListPage = () => {
  const blogs = allBlogs
    .filter((blog) => blog.published !== false)
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .map((blog) => ({
      _id: blog._id,
      title: blog.title,
      description: blog.description,
      date: blog.date,
      slug: blog.slug,
    }));

  return (
    <PageTransitionWrapper>
      <BlogPageClient blogs={blogs} />
    </PageTransitionWrapper>
  );
};

export default BlogListPage;
