import PageTransitionWrapper from "@/components/Animate/PageTransitionWrapper/PageTransitionWrapper";
import Container from "@/components/Common/Container/Container";
import { Mdx } from "@/components/Common/Mdx/Mdx";
import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import { allProfiles } from "content-collections";
import { notFound } from "next/navigation";
import { FC } from "react";

const getProfileFromParam = async (slug: string) => {
  const profileDetail = allProfiles.find(
    (profile) => profile.slugAsParams === slug,
  );

  if (!profileDetail) {
    notFound();
  }

  return profileDetail;
};

export async function generateMetadata(props: TPProfileDetailPageProps) {
  const params = await props.params;

  const { slug } = params;

  const profile = await getProfileFromParam(slug);

  return {
    title: `Profile | ${profile.name}`,
    description: `Profile | ${profile.description}`,
    openGraph: {
      title: `Profile | ${profile.name}`,
      description: `Profile | ${profile.description}`,
      images: !!profile.image
        ? profile.image
        : "https://mmswe.com/images/mmswe-seo.png",
      siteName: `https://mmswe.com/profile/${slug}`,
    },
  };
}

export const generateStaticParams = async () =>
  allProfiles.map((profile) => ({ slug: profile.slugAsParams }));

type TPProfileDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const PProfileDetailPage: FC<TPProfileDetailPageProps> = async (props) => {
  const params = await props.params;

  const { slug } = params;

  const profile = await getProfileFromParam(slug);

  return (
    <PageTransitionWrapper>
      <Container>
        <section className="py-16">
          <Mdx
            code={profile.code}
            extraText={`${profile.name} | ${profile.description}`}
          />
        </section>

        <SpacingDivider size="lg" />
      </Container>
    </PageTransitionWrapper>
  );
};
export default PProfileDetailPage;
