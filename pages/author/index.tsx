// TODO(peng) figure out how to add metadata

import * as React from "react";

import Layout from "../../components/layout";

import { styled, useTheme } from "@mui/material/styles";

import { getCopyrightDate } from "../../lib/posts";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IncrementalConfig from "@/incremental.config";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Head from "next/head";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
import Paragraph from "@/components/paragraph";
import Link from "next/link";

export async function getStaticProps() {
  const copyrightDate = await getCopyrightDate();
  return {
    props: {
      copyrightDate,
    },
  };
}

export default function Page({ copyrightDate }: any) {
  const theme = useTheme();
  return (
    <Layout copyrightDate={copyrightDate}>
      <Head>
        <title>{IncrementalConfig.author.name}</title>
      </Head>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            rowGap: "18px",
            marginTop: "48px",
          }}
        >
          <Avatar
            sx={{
              width: 160,
              height: 160,
            }}
          >
            <Image
              src={IncrementalConfig.author.imageUrl}
              alt={IncrementalConfig.author.name}
              width={160}
              height={160}
            />
          </Avatar>
          <Typography variant="authorName">
            {IncrementalConfig.author.name}
          </Typography>
          <Paragraph>
            I'm a father, engineer and product manager. I love getting hands on
            and prefer to learn by doing, and I enjoy dissecting how things work
            and jamming on new ideas.
          </Paragraph>
          <Paragraph>
            Previously, I spent 14 years at Elgoogs building out products like{" "}
            <Link
              href="https://developers.google.com/standard-payments"
              target="_blank"
            >
              Google Standard Payments
            </Link>
            , Google Checkout, Android Wear, Google TV, and Chromecast.
          </Paragraph>
          <Paragraph>
            I've found the articles and instructions that other people share to
            be incredibly useful and want to share the knowledge and expertise
            that I've acquired over the years.
          </Paragraph>
        </Box>
      </Container>
    </Layout>
  );
}
