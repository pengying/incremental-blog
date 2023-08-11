import * as React from 'react';
import Header from './header';
import Container from '@mui/material/Container';
import Footer from './footer';

export default function Layout({
  children, copyrightDate, home
}: {
  children: React.ReactNode,
  copyrightDate: any,
  home?: any
}) {
  return (
      <Container maxWidth="lg">
          <Header />
          {children}
          <Footer copyrightDate={copyrightDate}/>
        </Container>
  )
}
