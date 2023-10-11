import {
  defineDocumentType,
  makeSource,
  ComputedFields,
  FieldDefs,
} from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

const blogFields: FieldDefs = {
  title: { type: "string", required: true },
  description: { type: "string" },
  date: { type: "date", required: true },
  published: { type: "boolean", default: true },
};

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `./blog/**/*.mdx`,
  fields: blogFields,
  contentType: "mdx",
  computedFields: computedFields,
}));

const profileFields: FieldDefs = {
  name: { type: "string", required: true },
  description: { type: "string" },
};

export const Profile = defineDocumentType(() => ({
  name: "Profile",
  filePathPattern: `./profile/**/*.mdx`,
  fields: profileFields,
  contentType: "mdx",
  computedFields: computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Blog, Profile],
  mdx: {
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
  },
});
