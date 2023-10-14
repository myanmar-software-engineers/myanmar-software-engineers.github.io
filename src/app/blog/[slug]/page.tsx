import { FC } from "react";
import { allBlogs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Common/Mdx";
import Container from "@/components/Common/Container/Container";

const getBlogFromParams = async (slug: string) => {
  const blogDetail = allBlogs.find((blog) => blog.slugAsParams === slug);

  if (!blogDetail) {
    notFound();
  }

  return blogDetail;
};

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
