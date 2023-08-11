// TODO(peng) figure out how to add metadata

import * as React from 'react';

import Layout from '../../components/layout';

import { styled, useTheme } from '@mui/material/styles';

import { getSortedPostsHeaders } from '../../lib/posts';
import Typography from '@mui/material/Typography';

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
        <Layout allPostHeaders={allPostsHeaders}>
            <Typography>Todo</Typography>
        </Layout>
    )
}
