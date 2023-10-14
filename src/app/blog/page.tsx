import Container from "@/components/Common/Container/Container";
import APP_CONFIG from "@/config/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Blog List - ${APP_CONFIG.title}`,
  description: APP_CONFIG.description,
};

const BlogListPage = () => {
  return <Container>BlogListPage</Container>;
};

export default BlogListPage;
