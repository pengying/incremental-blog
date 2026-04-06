import React from "react";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

import Image from "next/image";

export default function ArticleCard({ pageData }: { pageData: any }) {
  const date = new Date(pageData.date);
  return (
    <CardHero>
      <Link href={`/posts/${pageData.slug}`} className="card-link">
        <ImageContainer>
          <Image
            src={pageData.hero}
            fill
            sizes="(max-width: 900px) 100vw, 420px"
            style={{ objectFit: "cover" }}
            alt={pageData.title}
          />
          <ImageOverlay />
        </ImageContainer>
      </Link>
      <CardContent
        sx={{
          padding: "20px 24px 24px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <CardLink href={`/posts/${pageData.slug}`} variant="heroTitle">
          {pageData.title}
        </CardLink>
        <Excerpt variant="heroBody">{pageData.excerpt}</Excerpt>
        <CardFooter variant="heroFooter">
          {date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })} &sdot; {pageData.readingTime.text}
        </CardFooter>
      </CardContent>
    </CardHero>
  );
}

const CardHero = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.card,
  height: "100%",
  minHeight: "400px",
  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.18)",
  backgroundImage: "none",
  position: "relative",
  borderRadius: "24px",
  overflow: "hidden",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  display: "flex",
  flexDirection: "column",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, rgba(242, 198, 109, 0.22), transparent)",
    zIndex: 1,
  },
  "&:hover": {
    transform: "translateY(-6px)",
    boxShadow: `
      0 24px 54px rgba(0, 0, 0, 0.28),
      0 0 0 1px rgba(242, 198, 109, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.05)
    `,
    border: "1px solid rgba(242, 198, 109, 0.18)",
  },
}));

const ImageContainer = styled("div")({
  position: "relative",
  width: "100%",
  height: "220px",
  overflow: "hidden",
  "& img": {
    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
});

const ImageOverlay = styled("div")({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "84px",
  background: "linear-gradient(to top, rgba(21, 23, 28, 0.95), transparent)",
  pointerEvents: "none",
});

const CardLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  display: "block",
  marginBottom: theme.spacing(1.5),
  color: theme.palette.primary.light,
  transition: "color 0.2s ease",
  fontSize: "1.4rem",
  fontWeight: 600,
  lineHeight: 1.15,
  "&:hover": {
    color: theme.palette.action.hover,
  },
}));

const Excerpt = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  color: theme.palette.common.copy,
  marginBottom: theme.spacing(2.5),
}));

const CardFooter = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.copy,
  fontSize: "12px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginTop: "auto",
}));
