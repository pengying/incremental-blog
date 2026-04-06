import * as React from "react";

import Layout from "@/components/layout";
import AuthorHero from "@/components/author-hero";
import PostSummary from "@/components/post-summary";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { getSortedPostsHeaders, getCopyrightDate } from "@/lib/posts";

import type { Metadata } from "next";
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
  return (
    <Layout copyrightDate={copyrightDate} home>
      <Container maxWidth="lg" sx={{ pb: { xs: 2, md: 3 } }}>
        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            maxWidth: { xs: "100%", md: "52rem" },
          }}
          className="animate-fade-in animate-delay-1"
        >
          <Stack spacing={{ xs: 3, md: 4 }}>
            <AuthorHero />
          </Stack>
        </Box>
        <Box
          sx={{
            mt: { xs: 6, md: 8 },
          }}
          className="animate-fade-in animate-delay-2"
        >
          <PostSummary allPostsHeaders={allPostsHeaders}></PostSummary>
        </Box>
      </Container>
    </Layout>
  );
}
