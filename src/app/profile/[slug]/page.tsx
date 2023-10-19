import Container from "@/components/Common/Container/Container";
import { Mdx } from "@/components/Common/Mdx";
import { allProfiles } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { FC } from "react";

const getProfileFromParam = async (slug: string) => {
  const profileDetail = allProfiles.find(
    (profile) => profile.slugAsParams === slug
  );

  if (!profileDetail) {
    notFound();
  }

  return profileDetail;
};

export async function generateMetadata({
  params: { slug },
}: TPProfileDetailPageProps) {
  const profile = await getProfileFromParam(slug);

  return {
    title: `Profile | ${profile.name}`,
    description: `Profile | ${profile.description}`,
  };
}

export const generateStaticParams = async () =>
  allProfiles.map((profile) => ({ slug: profile.slugAsParams }));

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
      <Mdx code={profile.body.code} />
    </Container>
  );
};
export default PProfileDetailPage;
