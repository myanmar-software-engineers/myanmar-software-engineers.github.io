import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX, type Options } from "@content-collections/mdx";
import path from "node:path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { z } from "zod";

const optionalString = z.string().nullish().transform((value) => value ?? undefined);

const mdxOptions: Options = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypePrettyCode as any,
      {
        theme: "github-dark",
        onVisitLine(node: any) {
          if (node.children.length === 0) {
            node.children = [{ type: "text", value: "" }];
          }
        },
        onVisitHighlightedLine(node: any) {
          node.properties.className.push("line--highlighted");
        },
        onVisitHighlightedWord(node: any) {
          node.properties.className = ["word--highlighted"];
        },
      },
    ],
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ["subheading-anchor"],
          arialLabel: "Link to section",
        },
      },
    ],
  ],
};

const profiles = defineCollection({
  name: "profiles",
  typeName: "Profile",
  directory: "content/profile",
  include: "**/*.mdx",
  schema: z.object({
    content: z.string(),
    name: z.string(),
    description: optionalString,
    tags: z.array(z.string()).optional(),
    image: optionalString,
  }),
  transform: async ({ content, _meta, ...profile }, context) => ({
    ...profile,
    _id: `profile/${_meta.filePath}`,
    slugAsParams: _meta.path,
    code: await compileMDX(context, { content, _meta }, {
      ...mdxOptions,
      cwd: path.resolve(context.collection.directory, _meta.directory),
    }),
  }),
});

const blogs = defineCollection({
  name: "blogs",
  directory: "content/blog",
  include: "**/*.mdx",
  schema: z.object({
    content: z.string(),
    title: z.string(),
    description: optionalString,
    date: z.union([z.string(), z.date()]).pipe(z.coerce.date())
      .transform((date) => date.toISOString()),
    published: z.boolean().default(true),
  }),
  transform: async ({ content, _meta, ...blog }, context) => ({
    ...blog,
    _id: `blog/${_meta.filePath}`,
    slug: `blog/${_meta.path}`,
    slugAsParams: _meta.path,
    code: await compileMDX(context, { content, _meta }, {
      ...mdxOptions,
      cwd: path.resolve(context.collection.directory, _meta.directory),
    }),
  }),
});

const books = defineCollection({
  name: "books",
  directory: "content/books",
  include: "**/*.mdx",
  schema: z.object({
    content: z.string(),
    title: z.string(),
    authorName: z.string(),
    link: z.string(),
    image: optionalString,
    authorEmail: optionalString,
    authorLink: optionalString,
  }),
  transform: ({ _meta, ...book }) => ({
    ...book,
    _id: `books/${_meta.filePath}`,
  }),
});

const classes = defineCollection({
  name: "classes",
  directory: "content/classes",
  include: "**/*.mdx",
  schema: z.object({
    content: z.string(),
    title: z.string(),
    description: z.string(),
    instructorName: z.string(),
    classLink: z.string(),
    tags: z.array(z.string()),
    classType: z.enum(["online", "In-Person"]),
    status: z.enum(["active", "completed", "incoming"]),
    proofOfAssociation: z.string(),
    image: optionalString,
  }),
  transform: ({ _meta, ...classItem }) => ({
    ...classItem,
    _id: `classes/${_meta.filePath}`,
  }),
});

export default defineConfig({ content: [profiles, blogs, books, classes] });
