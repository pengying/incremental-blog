import Layout from "@/components/layout";
import { getPostSlugs, getPostData, getCopyrightDate } from "@/lib/posts";
import { IArticle } from "@/types";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

import Image from "next/image";
import NextjsLink from "next/link";

import Paragraph from "@/components/paragraph";

import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

import '@/styles/prism.css';
import Typography from "@mui/material/Typography";

// TODO(peng): add metadata https://nextjs.org/docs/app/building-your-application/optimizing/metadata

const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt}
    sizes="100vw"
    style={{ width: "100%", height: "auto" }}
    {...props}
  />
);

const NextLink = (props:any) =>(
  <Link component={NextjsLink} {...props} />
)

const components = {
  img: ResponsiveImage,
  p: Paragraph,
  a: NextLink,
};

export async function getStaticPaths() {
  const paths = await getPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  const frontmatter = await getPostData(params.slug);
  const postData = await serialize(frontmatter.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
      format: 'mdx',
    },
    parseFrontmatter: false,
  });
  const copyrightDate = await getCopyrightDate();
  return {
    props: {
      frontmatter: frontmatter,
      postData: postData,
      copyrightDate: copyrightDate,
    },
  };
}

export default function Post({
  frontmatter,
  postData,
  copyrightDate,
}: {
  frontmatter: any
  copyrightDate: string;
  postData: any;
}) {
  return (
    <Layout copyrightDate={copyrightDate}>
      <Typography variant="heroTitle">{frontmatter.title}</Typography>
      <MDXRemote {...postData} components={components} />
    </Layout>
  );
}
