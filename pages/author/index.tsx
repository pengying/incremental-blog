// TODO(peng) figure out how to add metadata

import * as React from 'react';

import Layout from '../../components/layout';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { getSortedPostsHeaders } from '../../lib/posts';

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
        <Layout allPostHeaders={allPostsHeaders} home>
TODO
        </Layout>
    )
}
