import { FC } from "react";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import Container from "@/components/Common/Container/Container";
import { Mdx } from "@/components/Common/Mdx/Mdx";

const getBlogFromParams = async (slug: string) => {
  const blogDetail = allBlogs.find((blog) => blog.slugAsParams === slug);

  if (!blogDetail) {
    notFound();
  }

  return blogDetail;
};

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog.slugAsParams }));

type TBlogDetailPageProps = {
  params: {
    slug: string;
  };
};

const BlogDetailPage: FC<TBlogDetailPageProps> = async ({
  params: { slug },
}) => {
  const blog = await getBlogFromParams(slug);

  return (
    <Container>
      <Mdx code={blog.body.code} />
    </Container>
  );
};
export default BlogDetailPage;
