import Layout from "@/components/layout";
import { getPostSlugs, getPostData, getCopyrightDate } from "@/lib/posts";
import { IArticle } from "@/types";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";

import Image from "next/image";
import NextjsLink from "next/link";

import Blockquote from "@/components/blockquote";
import Paragraph from "@/components/paragraph";
import Headings from "@/components/headings";
import HorizontalRule from "@/components/horizontalrule";
import Lists from "@/components/lists";

import { styled } from "@mui/material/styles";
import prismStyles from "@/styles/theme/prism";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";
import ArticleSummary from "@/components/article-summary";
import Stack from "@mui/material/Stack";
import { useTheme } from "@emotion/react";

// TODO(peng): add metadata https://nextjs.org/docs/app/building-your-application/optimizing/metadata

const ResponsiveImage = (props: any) => (
  <Image
    alt={props.alt}
    sizes="100vw"
    width="0"
    height="0"
    style={{ width: "100%", height: "auto" }}
    {...props}
  />
);

const NextLink = (props: any) => <Link component={NextjsLink} {...props} />;

const components = {
  img: ResponsiveImage,
  p: Paragraph,
  a: NextLink,
  blockquote: Blockquote,
  h1: Headings.h2,
  h2: Headings.h2,
  h3: Headings.h3,
  h4: Headings.h4,
  h5: Headings.h5,
  h6: Headings.h6,
  hr: HorizontalRule,
  ol: Lists.ol,
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
      format: "mdx",
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
  frontmatter: any;
  copyrightDate: string;
  postData: any;
}) {
  const theme = useTheme();

  return (
    <Layout copyrightDate={copyrightDate}>
      <style jsx>{prismStyles}</style>
      <ConstrainedStack spacing={2}>
        <Typography variant="postTitle">{frontmatter.title}</Typography>
        <ArticleSummary frontmatter={frontmatter} />
      </ConstrainedStack>
      <Image
        src={frontmatter.hero}
        width="0"
        height="0"
        sizes="100vw"
        priority
        style={{
          width: "80%",
          height: "500px",
          objectFit: "cover",
          objectPosition: "left 20%",
          margin: `0 auto 35px`,
          display: "block",
        }}
        alt={frontmatter.title}
      />
      <Box
        sx={{
          "h1, h2, h3, h4, h5, h6": {
            width: "100%",
            margin: "0 auto",
            maxWidth: {
              sm: 486,
              md: 507,
              lg: 680,
            },
          },
          "h1, h1 *, h2, h2*": {
            margin: {
              md: "25px auto 18px",
              sm: "30px auto 18px",
            },
          },
          "h3, h3 *": {
            margin: "20px auto 10px",
          },
        }}
      >
        <MDXRemote {...postData} components={components} />
      </Box>
    </Layout>
  );
}

const ConstrainedStack = styled(Stack)(({ theme }) => ({
  margin: `${theme.spacing(8)} auto 35px`,
  width: "100%",
  maxWidth: "680px",
}));

// const ConstrainedHeaders = styled(Box)(({ theme }) => ({
//   h1 {
//     margin: 'auto',
//   }
// }));
