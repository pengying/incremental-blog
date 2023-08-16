import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import IncrementalConfig from "@/incremental.config";

const AuthorHero = () => {
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center">
        <Link href="/author">
          <Avatar>
            <Image
              src={IncrementalConfig.author.imageUrl}
              alt={IncrementalConfig.author.name}
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
            {IncrementalConfig.author.blurb}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default AuthorHero;
