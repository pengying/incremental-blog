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

import css from "styled-jsx/css";

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
    style={{
      width: "100%",
      height: "auto",
      margin: "15px auto 50px",
      maxWidth: "100%",
      position: "relative",
    }}
    {...props}
  />
);

const NextLink = (props: any) => <Link component={NextjsLink} {...props} />;

const components = {
  img: ResponsiveImage,
  Image: ResponsiveImage,
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
  ul: Lists.ul,
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
    parseFrontmatter: true,
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
  const imageStyles = getImageStyles(theme);

  return (
    <Layout copyrightDate={copyrightDate}>
      <style jsx>{prismStyles}</style>
      <style jsx>{imageStyles}</style>
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
          "h1, h1 *, h2, h2 *": {
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

function getImageStyles(theme: any) {
  const IMAGE_WIDTHS = {
    regular: "680px",
    large: "1004px",
    full: "100vw",
  };

  return css.global`
  div[class^="Image"] img {
    display: inline-block;
    position: relative;
    max-width: 100%;
    height: auto;
    z-index: 0;
    margin: 15px auto 50px;
    border-radius: 5px;
  
    ${theme.breakpoints.only("md")} : {
      margin: 10px auto 45px;
    };
  }

 div.Image__Small {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 100%;
  height: auto;
  z-index: 0;
  margin: 15px auto 50px;
  border-radius: 5px;
  width: 100%;
  max-width: 680px;
}

  .Image__Container {
    text-align: center;
  }

  img.Image__With-Shadow {
    box-shadow: 0px 15px 60px rgba(0, 0, 0, 0.15);
  }

  div.Image__Medium {
    position: relative;
    margin: 15px auto 50px;
    width: 100%;
    max-width: ${IMAGE_WIDTHS.large};
  }

  div.Image__Large {
    position: relative;
    left: -17px;
    width: ${IMAGE_WIDTHS.full};
    margin: 25px auto 60px;
    pointer-events: none;

    /* To allow interaction for all external interactions: YouTube, Twitter, Gist */
    iframe {
      pointer-events: all;
    }

    img {
      border-radius: 0;
    }
  }
 `;
}
