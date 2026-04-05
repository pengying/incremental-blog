import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Socials from "./socials";

export default function Footer({ copyrightDate }: { copyrightDate: any }) {
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
        <Typography variant="heroFooter">© {copyrightDate} Incremental</Typography>
        <Socials />
        
      </Box>
    </>
  );
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
    height: '400px',
    zIndex: -1,
    pointerEvents: 'none',
    background: 'linear-gradient(180deg, #0D0D0F 0%, rgba(13, 13, 15, 0.0) 100%)',
})