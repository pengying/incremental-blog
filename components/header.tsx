import React, { useState, useEffect, MouseEvent } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

import Link from "next/link";
import { styled } from "@mui/material/styles";
import Logo from "./logo";

import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

const NavigationHeader: React.FC<{}> = () => {
  const theme = useTheme();
  return (
      <Box
        sx={{
          position: "relative",
          zIndex: "appbar",
          pt: { xs: 4, sm: 5, md: 6 },
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <LogoLink
          href="/"
          data-a11y="false"
          title="Navigate back to the homepage"
          aria-label="Navigate back to the homepage"
        >
          <Logo fill="white" />
          <Hidden>Navigate back to the homepage</Hidden>
        </LogoLink>
      </Box>
  );
};

export default NavigationHeader;

const LogoLink = styled(Link)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  gap: theme.spacing(1.5),
  left: 0,
  color: theme.palette.primary.light,
  transition: 'color 0.2s ease, opacity 0.2s ease',
  '&:hover': {
    color: theme.palette.action.hover,
    opacity: 0.9,
  },
  [theme.breakpoints.only('md')]: {
    left: 0
  }
}));


const Hidden = styled('span')({
  position: 'absolute',
  display: 'inline-block',
  opacity: 0,
  width: '0px',
  height: '0px',
  visibility: 'hidden',
  overflow: 'hidden',
});
