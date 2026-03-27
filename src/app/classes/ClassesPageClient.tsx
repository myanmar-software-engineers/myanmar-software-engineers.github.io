"use client";

import Container from "@/components/Common/Container/Container";
import SectionHero from "@/components/Common/SectionHero/SectionHero";
import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import { BookOpenCheck, GraduationCap, Presentation, School } from "lucide-react";
import { useTranslations } from "next-intl";

type ClassItem = {
  _id: string;
  title: string;
  status: string;
  classType: string;
  description: string;
  instructorName: string;
  tags: string[];
  classLink: string;
};

type ClassesPageClientProps = {
  classes: ClassItem[];
};

const ClassesPageClient = ({ classes }: ClassesPageClientProps) => {
  const t = useTranslations("classesHero");

  return (
    <Container>
      <section className="py-16">
        <SectionHero
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
          labelIcon={BookOpenCheck}
          labelIconClassName="text-prism-cyan"
          labelChipBackground="linear-gradient(135deg, #22d3ee12, #a78bfa08)"
          labelChipBorder="1px solid rgba(34,211,238,0.15)"
          shimmerBackground="linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.1) 50%, transparent 100%)"
          myanmarTitleColorClass="text-prism-cyan"
          floatingIcons={[
            {
              Icon: GraduationCap,
              className: "text-prism-cyan/40",
              style: { top: "8%", right: "6%" },
              delay: 0.25,
              sizeClass: "h-4 w-4",
            },
            {
              Icon: Presentation,
              className: "text-prism-violet/40",
              style: { top: "56%", right: "14%" },
              delay: 0.35,
              sizeClass: "h-3.5 w-3.5",
            },
            {
              Icon: School,
              className: "text-prism-rose/35",
              style: { top: "85%", left: "3%" },
              delay: 0.45,
              sizeClass: "h-3.5 w-3.5",
            },
          ]}
        />

        {classes.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-white/10 bg-surface/50 p-8 text-zinc-300">
            <h2 className="font-display text-2xl font-semibold text-zinc-100">
              No classes yet
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
              Verified class listings will appear here after maintainers review
              and approve class submissions.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-4">
            {classes.map((classItem) => (
              <article
                key={classItem._id}
                className="rounded-3xl border border-white/10 bg-surface/50 p-6 transition-colors hover:border-white/20"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-display text-2xl font-semibold text-zinc-100">
                        {classItem.title}
                      </h2>
                      <span className="rounded-full border border-prism-cyan/30 bg-prism-cyan/10 px-3 py-1 text-xs font-medium text-prism-cyan">
                        {classItem.status}
                      </span>
                      <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-zinc-300">
                        {classItem.classType}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      {classItem.description}
                    </p>

                    <p className="mt-3 text-sm text-zinc-300">
                      Instructor: {classItem.instructorName}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {classItem.tags.map((tag) => (
                        <span
                          key={`${classItem._id}-${tag}`}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:items-end">
                    <a
                      href={classItem.classLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-prism-cyan/40 px-4 py-2 text-sm font-medium text-prism-cyan transition-colors hover:border-prism-cyan hover:bg-prism-cyan/10"
                    >
                      Official Link
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      <SpacingDivider size="lg" />
    </Container>
  );
};

export default ClassesPageClient;
