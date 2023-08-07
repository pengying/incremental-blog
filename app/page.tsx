'use client';

// TODO(peng) figure out how to add metadata

import * as React from 'react';
import Typography, { typographyClasses } from '@mui/material/Typography';

import theme from "./styles/theme/mui-theme";
import AuthorHero from './components/author-hero';
import Box from '@mui/material/Box';

export default function Home({}) {

    return(
        <>
            <Box 
             sx={{
                width: '70%',
                mt: '100px',
                mb: '100px',
                [theme.breakpoints.only('sm')]: {
                    display: 'none',
                }
             }}
             >
                <Typography variant="quote">Sharing my learnings piece by piece</Typography>
             </Box>
             <AuthorHero />

        </>
    )
}