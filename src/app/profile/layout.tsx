import Container from "@/components/Common/Container/Container";
import { titleFont } from "@/fonts/fonts";
import styles from "@/styles/styles";
import { cn } from "@/utils";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container className={cn(styles.paddingHelper, titleFont.className)}>
      {children}
    </Container>
  );
}
