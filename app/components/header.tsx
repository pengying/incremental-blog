'use client';

import React, { useState, useEffect, MouseEvent } from "react";
import theme from "../styles/theme/mui-theme";
import useMediaQuery from '@mui/material/useMediaQuery';

import Link from "next/link";
import styled from "@emotion/styled";
import mediaqueries from "../lib/media";
import Logo from "./logo";

import Box from "@mui/material/Box";
import { appBarClasses } from "@mui/material";

const NavigationHeader: React.FC<{}> = () => {
  // const [showBackArrow, setShowBackArrow] = useState<boolean>(false);
  // const [previousPath, setPreviousPath] = useState<string>("/");

  // const [colorMode] = useColorMode();
  // const fill = colorMode === "dark" ? "#fff" : "#000";

  return (
      <Box
        sx={{
          position: "relative",
          zIndex: "appbar",
          pt: "100px",
          display: "flex",
          justifyContent: "space-between",
          [theme.breakpoints.down("sm")]: {
            pt: "50px",
          },
          "@media screen and (max-height: 800px)": {
            pt: "50px",
          },
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
        <NavControls>
          <>
            {/* <SharePageButton /> */}
            {/* <DarkModeToggle /> */}
          </>
        </NavControls>
      </Box>
  );
};

export default NavigationHeader;

const IconWrapper = styled.button<{ isDark: boolean }>`
  opacity: 0.5;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  margin-left: 30px;

  &:hover {
    opacity: 1;
  }

  ${mediaqueries.tablet`
  display: inline-flex;
  transform: scale(0.708);
  margin-left: 10px;


  &:hover {
    opacity: 0.5;
  }
  `}
`; // TODO(peng): add back in a11y support

const LogoLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  left: 0;
  color: ${theme.palette.text.primary};
  ${mediaqueries.desktop_medium`
    left: 0
  `}

  &[data-a11y="true"]:focus::after {
    content: "";
    position: absolute;
    left: -10%;
    top: -30%;
    width: 120%;
    height: 160%;
    border: 2px solid #6166dc;
    background: rgba(255, 255, 255, 0.01);
    border-radius: 5px;
  }
`;

const Hidden = styled.span`
  position: absolute;
  display: inline-block;
  opacity: 0;
  width: 0px;
  height: 0px;
  visibility: hidden;
  overflow: hidden;
`;

const NavControls = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${mediaqueries.phablet`
    right: -5px;
  `}
`;
