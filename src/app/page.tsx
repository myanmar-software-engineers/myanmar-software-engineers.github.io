import Container from "@/components/Common/Container/Container";
import SquareBox from "@/components/Ui/SquareBox/SquareBox";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Myanmar Software Engineers",
  description:
    "Explore our Job Board, access insightful Tech Articles, showcase your Portfolio, and join a Community that thrives on mutual growth.",
};

export default function HomePage() {
  return (
    <Container>
      <SquareBox>
        <h1 className="mb-5"> Myanmar Software Engineers Community </h1>
        <p>
          Explore our Job Board, access insightful Tech Articles, showcase your
          Portfolio, and join a Community that thrives on mutual growth.
        </p>
      </SquareBox>
    </Container>
  );
}
