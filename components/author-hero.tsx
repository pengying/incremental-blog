import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";

const AuthorHero = () => {
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
        <Box
          sx={{
            width: "60%",
            lineHeight: 1.3,
          }}
        >
          <Typography variant="heroAuthor">
            I&apos;m happiest at the intersection of product and engineering. I
            enjoying understanding technology and businesses strategy. I&apos;ve
            grown products from 0 to 1 and 1 to 1 billion.
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default AuthorHero;
