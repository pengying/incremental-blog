// TODO(peng) figure out how to add metadata

import * as React from 'react';

import Layout from '../../components/layout';

import { styled, useTheme } from '@mui/material/styles';

import { getCopyrightDate } from '../../lib/posts';
import Typography from '@mui/material/Typography';

export async function getStaticProps() {
    const copyrightDate = await getCopyrightDate();
    return  {
        props: {
            copyrightDate,
        },
    };
}

export default function Page({copyrightDate}:any) {
    const theme = useTheme();
    return(
        <Layout copyrightDate={copyrightDate}>
            <Typography>Todo</Typography>
        </Layout>
    )
}
