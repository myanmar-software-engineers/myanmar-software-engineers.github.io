"use client";

import Container from "@/components/Common/Container/Container";
import SectionHero from "@/components/Common/SectionHero/SectionHero";
import SpacingDivider from "@/components/Common/SpacingDivider/SpacingDivider";
import { BookOpen, Bookmark, LibraryBig, NotebookPen } from "lucide-react";
import { useTranslations } from "next-intl";

type BookItem = {
  _id: string;
  title: string;
  authorName: string;
  authorEmail?: string;
  authorLink?: string;
  image?: string;
  link: string;
};

type BooksPageClientProps = {
  books: BookItem[];
};

const BooksPageClient = ({ books }: BooksPageClientProps) => {
  const t = useTranslations("booksHero");

  return (
    <Container>
      <section className="py-16">
        <SectionHero
          label={t("label")}
          title={t("title")}
          subtitle={t("subtitle")}
          labelIcon={NotebookPen}
          labelIconClassName="text-prism-violet"
          labelChipBackground="linear-gradient(135deg, #a78bfa12, #22d3ee08)"
          labelChipBorder="1px solid rgba(167,139,250,0.15)"
          shimmerBackground="linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.1) 50%, transparent 100%)"
          myanmarTitleColorClass="text-prism-violet"
          floatingIcons={[
            {
              Icon: BookOpen,
              className: "text-prism-violet/40",
              style: { top: "8%", right: "6%" },
              delay: 0.25,
              sizeClass: "h-4 w-4",
            },
            {
              Icon: LibraryBig,
              className: "text-prism-cyan/40",
              style: { top: "65%", right: "14%" },
              delay: 0.35,
              sizeClass: "h-3.5 w-3.5",
            },
            {
              Icon: Bookmark,
              className: "text-prism-rose/35",
              style: { top: "80%", left: "3%" },
              delay: 0.45,
              sizeClass: "h-3.5 w-3.5",
            },
          ]}
        />

        {books.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-white/10 bg-surface/50 p-8 text-zinc-300">
            <h2 className="font-display text-2xl font-semibold text-zinc-100">
              No books yet
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-400">
              Community recommendations will appear here once contributors add
              book entries to the repository.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-4">
            {books.map((book) => (
              <article
                key={book._id}
                className="rounded-3xl border border-white/10 bg-surface/50 p-6 transition-colors hover:border-white/20"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    {book.image && (
                      <img
                        src={book.image}
                        alt={`${book.title} cover`}
                        className="h-32 w-24 rounded-xl border border-white/10 object-cover"
                      />
                    )}

                    <div>
                      <h2 className="font-display text-2xl font-semibold text-zinc-100">
                        {book.title}
                      </h2>
                      <p className="mt-2 text-sm text-zinc-400">
                        by {book.authorName}
                      </p>
                      {(book.authorEmail || book.authorLink) && (
                        <div className="mt-3 flex flex-col gap-2 text-sm">
                          {book.authorEmail && (
                            <a
                              href={`mailto:${book.authorEmail}`}
                              className="text-zinc-400 transition-colors hover:text-prism-cyan"
                            >
                              {book.authorEmail}
                            </a>
                          )}
                          {book.authorLink && (
                            <a
                              href={book.authorLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-400 transition-colors hover:text-prism-cyan"
                            >
                              {book.authorLink}
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-prism-cyan/40 px-4 py-2 text-sm font-medium text-prism-cyan transition-colors hover:border-prism-cyan hover:bg-prism-cyan/10"
                  >
                    Open Resource
                  </a>
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

export default BooksPageClient;
