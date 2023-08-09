import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Socials from "./socials";

export default function Footer({ allPostsHeaders }: { allPostsHeaders: any }) {
    const theme = useTheme();
    return (
    <>
      <Hr />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: theme.spacing(8)
        }}
      >
        <Typography variant="heroFooter">© {copyrightDate(allPostsHeaders)} Incremental</Typography>
        <Socials />
      </Box>
    </>
  );
}

function copyrightDate(allPostsHeaders: any) {
  const years = [0, allPostsHeaders.length - 1].map((edge) =>
    new Date(allPostsHeaders[edge].date).getUTCFullYear()
  );
  return years[0] === years[1] ? `${years[0]}` : `${years[0]}–${years[1]}`;
}

const Hr = styled("hr")(({ theme }) => ({
  color: theme.palette.grey[600],
  opacity: 0.33,
  marginBottom: theme.spacing(6),
}));
