'use client';

// TODO(peng) figure out how to add metadata

import * as React from 'react';


import Layout from '../components/layout';
import AuthorHero from '../components/author-hero';
import PostSummary from '../components/post-summary';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { getSortedPostsHeaders } from '../lib/posts';

export async function getStaticProps() {
    const allPostsHeaders = await getSortedPostsHeaders();
    console.log(allPostsHeaders);
    return  {
        props: {
            allPostsHeaders,
        },
    };
}

export default function Page({allPostsHeaders}:any) {
    const theme = useTheme();
    return(
        <Layout home>
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
             <PostSummary 
               allPostsHeaders={allPostsHeaders}
               >
            </PostSummary>
        </Layout>
    )
}