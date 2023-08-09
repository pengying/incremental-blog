'use client';

import React from 'react';
import theme from '../styles/theme/mui-theme';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';


const AuthorHero = () => {
    return (
        <>
            <Stack direction="row" spacing={2} alignItems="center">
                <Link href="/author">
                    <Avatar alt="Peng Ying" src="/images/profile.jpg" />
                </Link>
                <Box 
                    sx= {{
                        width: '60%',
                        lineHeight: 1.3,
                    }}>
                                        <Typography variant="heroAuthor">I&apos;m happiest at the intersection of product and engineering.  I enjoying understanding technology and businesses strategy.  I&apos;ve grown products from 0 to 1 and 1 to 1 billion.</Typography>
                </Box>

            </Stack>
        </>
    )
}

export default AuthorHero;
