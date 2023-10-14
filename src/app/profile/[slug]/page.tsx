import { FC } from "react";
import { allProfiles } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/Common/Mdx";
import Container from "@/components/Common/Container/Container";

const getProfileFromParam = async (slug: string) => {
  const profileDetail = allProfiles.find(
    (profile) => profile.slugAsParams === slug
  );

  if (!profileDetail) {
    notFound();
  }

  return profileDetail;
};

type TPProfileDetailPageProps = {
  params: {
    slug: string;
  };
};

const PProfileDetailPage: FC<TPProfileDetailPageProps> = async ({
  params: { slug },
}) => {
  const profile = await getProfileFromParam(slug);

  return (
    <Container>
      <h1>{profile.name}</h1>
      <Mdx code={profile.body.code} />
    </Container>
  );
};
export default PProfileDetailPage;
