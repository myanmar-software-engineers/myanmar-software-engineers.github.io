import { FC } from "react";
import { allBlogs } from "content-collections";
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
  params: Promise<{
    slug: string;
  }>;
};

const BlogDetailPage: FC<TBlogDetailPageProps> = async props => {
  const params = await props.params;

  const {
    slug
  } = params;

  const blog = await getBlogFromParams(slug);

  return (
    <Container>
      <Mdx code={blog.code} />
    </Container>
  );
};
export default BlogDetailPage;
