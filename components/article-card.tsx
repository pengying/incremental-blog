import React from "react";
import { styled } from "@mui/material/styles";

import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Image from 'next/image';

export default function ArticleCard({ pageData }: { pageData: any }) {
  const date = new Date(pageData.date);
  return (
    <CardHero sx={{ borderRadius: 0 }}>
      <CardMedia sx={{ height: 280 }}>
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={pageData.hero} fill sizes='280px, 40vw' style={{objectFit:'cover'}} alt={pageData.title} />
          </div>
      </CardMedia>

      <CardContent sx={{ padding: 0 }}>
        <CardLink href={`/posts/${pageData.slug}`} variant="heroTitle">
          {pageData.title}
        </CardLink>
        <Excerpt variant="heroBody">{pageData.excerpt}</Excerpt>
        <CardFooter variant="heroFooter">
          {date.toLocaleDateString()} &sdot; {pageData.readingTime.text}
        </CardFooter>
      </CardContent>
    </CardHero>
  );
}

const CardHero = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: "475px",
  boxShadow: "none",
  backgroundImage: "none",
  position: "relative",
}));

const CardLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  display: "block",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  color: theme.palette.primary.light,
  transition: theme.transitions.create(["color"]),
  "&:hover": {
    color: theme.palette.action.hover,
  },
}));

// Ellipsize text after the 3rd line
const Excerpt = styled(Typography)(({ theme }) => ({
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  height: "rem",
  overflow: "hidden",
}));

const CardFooter = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
}));
