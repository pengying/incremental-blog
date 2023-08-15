import * as React from "react";

import Layout from "@/components/layout";
import AuthorHero from "@/components/author-hero";
import PostSummary from "@/components/post-summary";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { getSortedPostsHeaders, getCopyrightDate } from "@/lib/posts";

import type { Metadata } from "next";
import Head from "next/head";
import Container from "@mui/material/Container";

export const metadata: Metadata = {
  title: "Incremental Blog",
  description: "A place to share my thoughts",
  icons: {
    icon: "/favicon.ico",
  },
};

export async function getStaticProps() {
  const allPostsHeaders = await getSortedPostsHeaders(true);
  const copyrightDate = await getCopyrightDate();
  const returnObj = {
    props: {
      allPostsHeaders: allPostsHeaders,
      copyrightDate: copyrightDate,
    },
    revalidate: 1, // TODO(peng): figure out why it throws an undfined error when revalidate isn't set.
  };
  return returnObj;
}

export default function Page({
  allPostsHeaders,
  copyrightDate,
}: {
  allPostsHeaders: any;
  copyrightDate: string;
}) {
  const theme = useTheme();
  return (
    <Layout copyrightDate={copyrightDate} home>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: "70%",
            mt: theme.spacing(10),
            mb: theme.spacing(10),
            lineHeight: 1.2,
            [theme.breakpoints.down("sm")]: {
              // display: 'none',
            },
          }}
        >
          <Typography variant="quote">
            Everyday is an opportunity to grow. Sharing my learnings, successes
            and failures.
          </Typography>
        </Box>
        <AuthorHero />
        <PostSummary allPostsHeaders={allPostsHeaders}></PostSummary>
      </Container>
    </Layout>
  );
}
