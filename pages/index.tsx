import * as React from 'react';

import Layout from '@/components/layout';
import AuthorHero from '@/components/author-hero';
import PostSummary from '@/components/post-summary';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { getSortedPostsHeaders } from '@/lib/posts';

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Incremental Blog',
  description: 'A place to share my thoughts',
}
 

export async function getStaticProps() {
    const allPostsHeaders = await getSortedPostsHeaders();
    return  {
        props: {
            allPostsHeaders,
        },
    };
}

export default function Page({allPostsHeaders}:any) {
    const theme = useTheme();
    return(
        <Layout allPostHeaders={allPostsHeaders} home>
            <Box 
             sx={{
                width: '70%',
                mt: theme.spacing(10),
                mb: theme.spacing(10),
                lineHeight: 1.2,
                [theme.breakpoints.down('sm')]: {
                    // display: 'none',
                }
             }}
             >
                <Typography variant="quote">Everyday is an opportunity to grow.  Sharing my learnings, successes and failures.</Typography>
             </Box>
             <AuthorHero />
             <PostSummary
               allPostsHeaders={allPostsHeaders}
               >
            </PostSummary>
        </Layout>
    )
}
