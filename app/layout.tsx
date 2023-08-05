import * as React from 'react';
import type { Metadata } from 'next'
import Header from './components/header';
import ThemeRegistry from './theme-registry';

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
        <ThemeRegistry options={{ key: 'mui' }}>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
