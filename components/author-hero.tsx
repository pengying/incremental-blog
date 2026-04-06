import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import Image from "next/image";
import IncrementalConfig from "@/incremental.config";
import { styled } from "@mui/material/styles";

const AuthorHero = () => {
  return (
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 2.5 }}
        alignItems={{ xs: "flex-start", sm: "center" }}
      >
        <Link href="/author">
          <AuthorAvatar>
            <Image
              src={IncrementalConfig.author.imageUrl}
              alt={IncrementalConfig.author.name}
              width={56}
              height={56}
            />
          </AuthorAvatar>
        </Link>
        <Box
          sx={{
            maxWidth: "42rem",
            lineHeight: 1.3,
          }}
        >
          <Typography variant="heroName" sx={{ mb: 1.25 }}>
            I&apos;m Peng -{" "}
          </Typography>
          <Typography variant="heroAuthor">
            {IncrementalConfig.author.blurb}
          </Typography>
        </Box>
      </Stack>
  );
};

export default AuthorHero;

const AuthorAvatar = styled(Avatar)(({ theme }) => ({
  width: 56,
  height: 56,
  border: "1px solid rgba(242, 198, 109, 0.28)",
  boxShadow: "0 0 0 6px rgba(255, 255, 255, 0.02)",
  backgroundColor: theme.palette.background.elevated,
}));
