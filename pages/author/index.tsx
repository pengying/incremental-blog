// TODO(peng) figure out how to add metadata

import * as React from "react";

import Layout from "../../components/layout";

import { useTheme } from "@mui/material/styles";

import { getCopyrightDate } from "../../lib/posts";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Quote from "@mui/icons-material/FormatQuoteRounded";

import IncrementalConfig from "@/incremental.config";

import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Head from "next/head";
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
          <Paper
            elevation={0}
            sx={{
              padding: 8,
              marginTop: 5,
              backgroundColor: "#1D2128",
            }}
          >
            <Quote sx={{
              margin: '0 auto 20px',
              width: '100%',
              fontSize: 48,
            }} />
            <Paragraph>
              I&apos;m an engineer turned product manager. I love getting hands on
              and prefer to learn by doing, and I enjoy dissecting how things
              work and jamming on new ideas.
            </Paragraph>
            <Paragraph>
              I spent 14 years at Elgoogs building the developer experience for
              products like&nbsp; 
              <Link
                href="https://developers.google.com/standard-payments"
                target="_blank"
              >
                Google Standard Payments
              </Link>
              , Google Checkout, Android Wear, Google TV, and Chromecast. Then
              two years at{" "}
              <Link href="https://dev.synctera.com" target="_blank">
                Synctera
              </Link>{" "}
              building out the developer experience and platform.
            </Paragraph>
            <Paragraph>
              I&apos;ve found the articles, instructions, tools, and repos that other
              people share to be incredibly useful and want to give back by sharing the
              knowledge, expertise, and stories that I&apos;ve acquired over the
              years (possibly with some snark).  I&apos;ll do my best to share an informed perspective and I want to use this medium to get feedback and start discussions.
            </Paragraph>
          </Paper>
        </Box>
      </Container>
    </Layout>
  );
}
