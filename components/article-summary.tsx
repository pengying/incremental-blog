import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";

const AuthorHero = ({ frontmatter }: { frontmatter: any }) => {
  const date = new Date(frontmatter.date);
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center">
        <Link href="/author">
          <Avatar>
            <Image
              src="/images/profile.jpg"
              alt="Peng Ying"
              width={40}
              height={40}
            />
          </Avatar>
        </Link>
        <Typography variant="heroName">Peng Ying</Typography>
        <Typography variant="heroFooter">
          {date.toLocaleDateString()} &sdot; {frontmatter.readingTime.text}
        </Typography>
      </Stack>
    </>
  );
};

export default AuthorHero;
