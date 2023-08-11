import Layout from "@/components/layout";
import { getPostSlugs, getPostData, getCopyrightDate } from "@/lib/posts";
import { IArticle } from "@/types";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

import Image from "next/image";

import '@/styles/prism.css';
import Container from "@mui/material/Container";

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

export async function getStaticProps({ params }: { params: any }) {
  const copyrightDate = await getCopyrightDate();
  const postData = await serialize((await getPostData(params.slug)).content, {
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
      copyrightDate: copyrightDate,
    },
  };
}

export default function Post({
  postData,
  copyrightDate,
}: {
  copyrightDate: string;
  postData: any;
}) {
  return (
    <Layout copyrightDate={copyrightDate}>
      <Container maxWidth="sm">
      <MDXRemote {...postData} components={components} />
      </Container>
    </Layout>
  );
}
