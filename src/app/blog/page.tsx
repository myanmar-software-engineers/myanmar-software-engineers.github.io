import BodyText from "@/components/Common/BodyText/BodyText";
import Container from "@/components/Common/Container/Container";
import TitleText from "@/components/Common/TitleText/TitleText";
import SquareBox from "@/components/Ui/SquareBox/SquareBox";
import APP_CONFIG from "@/config/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Blog List | ${APP_CONFIG.title}`,
  description: APP_CONFIG.description,
};

const BlogListPage = () => {
  return (
    <Container>
      <SquareBox>
        <TitleText className="mb-2"> Welcome to the Blogs Page... </TitleText>
        <BodyText> Exciting blogs are on the horizon, stay tuned! </BodyText>
      </SquareBox>
    </Container>
  );
};

export default BlogListPage;
