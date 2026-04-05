import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import type {} from "@mui/lab/themeAugmentation";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    logo: React.CSSProperties;
    authorName: React.CSSProperties;
    authorDetails: React.CSSProperties;
    heroFooter: React.CSSProperties;
    heroName: React.CSSProperties;
    heroTitle: React.CSSProperties;
    heroBody: React.CSSProperties;
    quote: React.CSSProperties;
    heroAuthor: React.CSSProperties;
    postTitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    logo?: React.CSSProperties;
    heroFooter?: React.CSSProperties;
    heroName?: React.CSSProperties;
    heroTitle?: React.CSSProperties;
    heroBody?: React.CSSProperties;
    authorName?: React.CSSProperties;
    authorDetails?: React.CSSProperties;
    quote?: React.CSSProperties;
    heroAuthor?: React.CSSProperties;
    postTitle?: React.CSSProperties;
  }
  interface Theme {
    fonts: {
      merriweather: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    fonts?: {
      merriweather?: string;
    };
  }
  interface TypeBackground {
    card?: string;
    elevated?: string;
  }

  interface CommonColors {
    horizontalRule?: string;
    copy?: string;
    track?: string;
    progress?: string;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    logo: true;
    authorName: true;
    authorDetails: true;
    heroFooter: true;
    heroName: true;
    heroTitle: true;
    heroBody: true;
    quote: true;
    heroAuthor: true;
    postTitle: true;
    highlightFontFamily: true;
  }
}

const cormorantGaramond = Cormorant_Garamond({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0D0D0F",
      card: "#161619",
      elevated: "#1A1A1D",
    },
    common: {
      horizontalRule: "rgba(255, 255, 255, 0.06)",
      copy: "#8A8A8E",
      track: "rgba(255, 255, 255, 0.12)",
      progress: "#E8D5B5",
    },
    action: {
      hover: "#E8D5B5",
    },
    primary: {
      main: "#E8D5B5",
      light: "#F5F0E8",
      dark: "#D4BC94",
    },
    grey: {
      600: "#8A8A8E",
    },
  },
  components: {
    MuiLink: {
    },
  },
  fonts: {
    merriweather: cormorantGaramond.style.fontFamily
  },
  typography: {
    fontFamily: dmSans.style.fontFamily,
    heroTitle: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    heroBody: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "1rem",
      fontWeight: 300,
      color: "#8A8A8E",
    },
    heroFooter: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "18px",
      fontWeight: 700,
      color: "#8A8A8E",
      opacity: 0.33,
    },
    quote: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontSize: "3.5rem",
      fontWeight: 300,
      lineHeight: 1.15,
    },
    authorName: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "2.0rem",
      fontWeight: 700,
    },
    authorDetails: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
    },
    heroName: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "18px",
      fontWeight: 700,
      color: "#8A8A8E",
    },
    heroAuthor: {
      fontFamily: dmSans.style.fontFamily,
      fontSize: "14px",
      fontWeight: 400,
      color: "#8A8A8E",
    },
    logo: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontSize: "1.5rem",
      fontWeight: 400,
      fontStyle: "italic",
    },
    postTitle: {
      fontFamily: cormorantGaramond.style.fontFamily,
      fontSize: "3.5rem",
      fontWeight: 600,
    }
  },
});

export default theme;
