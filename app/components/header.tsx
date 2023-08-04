"use client";

import React, { useState, useEffect, MouseEvent } from 'react';
import theme from '../styles/theme/theme';

import { useColorMode } from "theme-ui";
import Link from 'next/link';
import Section from './section';
import styled from "@emotion/styled";
import mediaqueries from '../lib/media';
import Logo from './logo';

const DarkModeToggle: React.FC<{}> = () => {
    const [colorMode, setColorMode] = useColorMode();
    const isDark = colorMode === `dark`;
  
    function toggleColorMode(event: MouseEvent) {
      event.preventDefault();
      setColorMode(isDark ? `light` : `dark`);
    }
  
    return (
      <IconWrapper
        isDark={isDark}
        onClick={toggleColorMode}
        data-a11y="false"
        aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
        title={isDark ? "Activate light mode" : "Activate dark mode"}
      >
      </IconWrapper>
    );
  };

  const NavigationHeader: React.FC<{}> = () => {
    // const [showBackArrow, setShowBackArrow] = useState<boolean>(false);
    // const [previousPath, setPreviousPath] = useState<string>("/");
  
    const [colorMode] = useColorMode();
    const fill = colorMode === "dark" ? "#fff" : "#000";
  
    // TODO(peng): check if app needs to handle or render back button
    // useEffect(() => {
    //   const { width } = getWindowDimensions();
    //   const phablet = getBreakpointFromTheme("phablet");
  
    //   const prev = localStorage.getItem("previousPath");
    //   const previousPathWasHomepage =
    //     prev === (rootPath || basePath) || (prev && prev.includes("/page/"));
    //   const currentPathIsHomepage =
    //     location.pathname === (rootPath || basePath) || location.pathname.includes("/page/");
  
    //   setShowBackArrow(
    //     previousPathWasHomepage && !currentPathIsHomepage && width <= phablet,
    //   );
    //   setPreviousPath(prev);
    // }, []);
  
    return (
      <Section>
        <NavContainer>
          <LogoLink
            href="/"
            data-a11y="false"
            title="Navigate back to the homepage"
            aria-label="Navigate back to the homepage"
          >
            <Logo fill={fill} />
            <Hidden>Navigate back to the homepage</Hidden>
          </LogoLink>
          <NavControls>
              <>
                {/* <SharePageButton /> */}
                <DarkModeToggle />
              </>
          </NavControls>
        </NavContainer>
      </Section>
    );
  };
  
  export default NavigationHeader;

  const NavContainer = styled.div`
  position: relative;
  z-index: 100;
  padding-top: 100px;
  display: flex;
  justify-content: space-between;

  ${mediaqueries.desktop_medium`
    padding-top: 50px;
  `};

  @media screen and (max-height: 800px) {
    padding-top: 50px;
  }
`;

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
  left: 0;

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
    border: 2px solid ${theme.colors.accent};
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
