import * as React from "react";
import Header from "./header";
import Container from "@mui/material/Container";
import Footer from "./footer";

export default function Layout({
  children,
  copyrightDate,
  home,
}: {
  children: React.ReactNode;
  copyrightDate: any;
  home?: any;
}) {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <Container maxWidth="lg">
        <Header />
      </Container>
      <main>{children}</main>
      <Container maxWidth="lg">
        <Footer copyrightDate={copyrightDate} />
      </Container>
    </>
  );
}
