import * as React from 'react';
import type { Metadata } from 'next'
import Header from './components/header';
import ThemeRegistry from './theme-registry';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Container maxWidth="lg">
        <ThemeRegistry options={{ key: 'mui' }}>
          {children}
        </ThemeRegistry>
        </Container>
      </body>
      
    </html>
  )
}
