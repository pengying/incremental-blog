'use client';

import React from "react";
import styled from "@emotion/styled";
import theme from "../styles/theme/mui-theme";
import { Typography } from "@mui/material";

// todo change this fill to theme value

const Logo: React.FC<{ fill: string }> = ({ fill = "white" }) => {
  return (
    <>
      <LogoContainer>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 125"
          width="30"
          height="40"
          fill="white"
          className="Logo__Desktop"
        >
          <path d="M78.53,63.38a3.35,3.35,0,1,1,0,6.7H18.09V86.81H78.53V75.07a3.36,3.36,0,1,1,6.72,0V86.81a6.73,6.73,0,0,1-6.72,6.7H18.09a6.69,6.69,0,0,1-6.69-6.7V70.08a6.72,6.72,0,0,1,1.95-4.73,6.81,6.81,0,0,1,4.74-2Z" />
          <path d="M31.53,70.08H18.09a3.36,3.36,0,0,1-3.34-3.33v-6.7a6.64,6.64,0,0,1,2-4.73h0l0,0a6.68,6.68,0,0,1,4.72-1.94h6.72a6.56,6.56,0,0,1,4.71,2h0v0a6.67,6.67,0,0,1,2,4.71v6.7a3.35,3.35,0,0,1-3.35,3.33Zm-10.06-6.7h6.72V60.05h0v0h0v0H21.47v0h0l0,0h0Zm0-3.33Zm0,0Zm6.72,0Zm0,0Z" />
          <path d="M38.25,51.78a3.36,3.36,0,0,1,6.72,0v11.6H81.88V46.65H45A3.35,3.35,0,1,1,45,40H81.88a6.7,6.7,0,0,1,4.74,2,6.62,6.62,0,0,1,2,4.73V63.38a6.74,6.74,0,0,1-6.72,6.7H45a6.6,6.6,0,0,1-4.75-2h0a6.61,6.61,0,0,1-2-4.73Z" />
          <path d="M81.88,46.65H68.47a3.34,3.34,0,0,1-3.37-3.33v-6.7a6.73,6.73,0,0,1,6.71-6.7h6.72a6.73,6.73,0,0,1,6.72,6.7v6.7a3.34,3.34,0,0,1-3.37,3.33ZM71.81,40h6.72V36.62H71.81Z" />
          <path d="M61.75,34.82a3.36,3.36,0,1,1-6.72,0V23.22H18.09V40H55a3.35,3.35,0,1,1,0,6.7H18.09a6.65,6.65,0,0,1-4.46-1.71,1.76,1.76,0,0,1-.28-.26A6.65,6.65,0,0,1,11.4,40V23.22a6.64,6.64,0,0,1,6.69-6.67H55a6.67,6.67,0,0,1,4.49,1.71c.09.09.17.14.26.23a6.81,6.81,0,0,1,2,4.73Z" />
          <path d="M31.53,23.22H18.09a3.34,3.34,0,0,1-3.34-3.33v-6.7a6.64,6.64,0,0,1,2-4.73h0a6.73,6.73,0,0,1,4.75-2h6.72a6.78,6.78,0,0,1,4.74,2,1,1,0,0,1,.23.28,6.49,6.49,0,0,1,1.72,4.45v6.7a3.33,3.33,0,0,1-3.35,3.33ZM21.47,16.55h6.72V13.19H21.47Zm0-3.36Zm0,0Zm6.75,0Z" />
          <path d="M55,23.22H41.59a3.32,3.32,0,0,1-3.34-3.33v-6.7a6.61,6.61,0,0,1,2-4.73,1.79,1.79,0,0,1,.26-.23A6.69,6.69,0,0,1,45,6.49h6.72a6.81,6.81,0,0,1,4.74,2,1.64,1.64,0,0,1,.23.28,6.49,6.49,0,0,1,1.72,4.45v6.7A3.33,3.33,0,0,1,55,23.22ZM45,16.55h6.72V13.19H45Zm6.72-3.36Z" />
        </svg>
        <Typography variant="logo" className="hideable">
          incremental
        </Typography>
      </LogoContainer>
    </>
  );
};

export default Logo;

// TODO(peng): fix mobile query
const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  .hideable {
    margin: 0 0 0 0.5rem;
  }

  ${theme.breakpoints.down("sm")} {
    .hideable {
      display: none;
    }
  }
`;
