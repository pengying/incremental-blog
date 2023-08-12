import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Twitter, LinkedIn, GitHub } from "@mui/icons-material";
import Link from "@mui/material/Link";

export default function Socials() {
    const theme = useTheme();

  return (
    <Stack direction="row" spacing={2}>
      <StyledLink href="https://twitter.com/pengying" target="_blank">
        <Twitter />
      </StyledLink>
      <StyledLink href="https://www.linkedin.com/in/pying/" target="_blank">
        <LinkedIn />
      </StyledLink>
      <StyledLink href="http://github.com/pengying/incremental-blog" target="_blank">
        <GitHub />
      </StyledLink>
    </Stack>
  );
}

const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.grey[600],
}));