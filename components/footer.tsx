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
      <FooterGradient />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pb: theme.spacing(6),
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
  marginTop: theme.spacing(20),
}));

const FooterGradient = styled(Box)({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '350px',
    zIndex: -1,
    pointerEvents: 'none',
    background: 'linear-gradient(180deg, #111216 0%, rgba(66, 81, 98, 0.36) 100%)',
})