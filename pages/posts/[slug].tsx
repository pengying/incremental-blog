import Layout from "@/components/layout";
import { getSortedPostsHeaders, getPostSlugs, getPostData } from "@/lib/posts";
import { IArticle } from "@/types";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

import Image from "next/image";

import '@/styles/prism.css';

// TODO(peng): add metadata https://nextjs.org/docs/app/building-your-application/optimizing/metadata

const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt}
    sizes="100vw"
    style={{ width: "100%", height: "auto" }}
    {...props}
  />
);

const components = {
  img: ResponsiveImage,
};

export async function getStaticPaths() {
  const paths = await getPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

// const fixMetaPlugin = (options = {}) => {
//   return (tree: any) => {
//     visitor(tree, "element", visitor);
//   };

//   function visitor(node: any, index: any, parent: any) {
//     if (!parent || parent.tagName !== "pre" || node.tagName !== "code") {
//       return;
//     }

//     node.data = { ...node.data, meta: node.properties.metastring };
//   }
// };

export async function getStaticProps({ params }: { params: any }) {
  const allPostsHeaders = await getSortedPostsHeaders();
  const postData = await serialize(await getPostData(params.slug), {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
      format: 'mdx',
    },
    parseFrontmatter: false,
  });
  return {
    props: {
      postData: postData,
      allPostHeaders: allPostsHeaders,
    },
  };
}

export default function Post({
  postData,
  allPostHeaders,
}: {
  allPostHeaders: IArticle;
  postData: any;
}) {
  return (
    <Layout allPostHeaders={allPostHeaders}>
      <MDXRemote {...postData} components={components} />
    </Layout>
  );
}
