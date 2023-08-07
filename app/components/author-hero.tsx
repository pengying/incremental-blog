'use client';

import React from 'react';
import theme from '../styles/theme/mui-theme';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const AuthorHero = () => {
    return (
        <>
            <Stack direction="row" spacing={2}>
                <Link href="/author">
                    <Avatar alt="Peng Ying" src="/images/profile.jpg" />
                </Link>
                <Typography>At the intersection of product and engineering.  I enjoying understanding technology and businesses strategy.  I&apos;ve grown products from 0 to 1 and 1 to 1 billion.</Typography>
            </Stack>
        </>
    )
}

export default AuthorHero;
