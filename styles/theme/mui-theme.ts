import { Manrope, Newsreader } from "next/font/google";
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

const newsreader = Newsreader({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#101114",
      card: "#15171c",
      elevated: "#1b1e24",
    },
    common: {
      horizontalRule: "rgba(235, 239, 245, 0.09)",
      copy: "#9ca3af",
      track: "rgba(235, 239, 245, 0.14)",
      progress: "#f2c66d",
    },
    action: {
      hover: "#f2c66d",
    },
    primary: {
      main: "#f2c66d",
      light: "#f8fafc",
      dark: "#daab4d",
    },
    grey: {
      600: "#9ca3af",
    },
  },
  components: {
    MuiLink: {
    },
  },
  fonts: {
    merriweather: newsreader.style.fontFamily
  },
  typography: {
    fontFamily: manrope.style.fontFamily,
    heroTitle: {
      fontFamily: newsreader.style.fontFamily,
      fontSize: "1.65rem",
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
    },
    heroBody: {
      fontFamily: manrope.style.fontFamily,
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.75,
      color: "#9ca3af",
    },
    heroFooter: {
      fontFamily: manrope.style.fontFamily,
      fontSize: "0.75rem",
      fontWeight: 700,
      color: "#9ca3af",
      opacity: 0.72,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
    },
    quote: {
      fontFamily: newsreader.style.fontFamily,
      fontSize: "4rem",
      fontWeight: 600,
      lineHeight: 1.02,
      letterSpacing: "-0.045em",
    },
    authorName: {
      fontFamily: manrope.style.fontFamily,
      fontSize: "2.0rem",
      fontWeight: 700,
    },
    authorDetails: {
      fontFamily: manrope.style.fontFamily,
      fontSize: "18px",
      fontWeight: 400,
    },
    heroName: {
      fontFamily: manrope.style.fontFamily,
      fontSize: "0.75rem",
      fontWeight: 800,
      color: "#f2c66d",
      letterSpacing: "0.16em",
      textTransform: "uppercase",
    },
    heroAuthor: {
      fontFamily: manrope.style.fontFamily,
      fontSize: "0.98rem",
      fontWeight: 500,
      lineHeight: 1.75,
      color: "#cbd5e1",
    },
    logo: {
      fontFamily: manrope.style.fontFamily,
      fontSize: "1.55rem",
      fontWeight: 800,
      lineHeight: 1,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
    postTitle: {
      fontFamily: newsreader.style.fontFamily,
      fontSize: "3.5rem",
      fontWeight: 600,
      lineHeight: 1.05,
      letterSpacing: "-0.04em",
    }
  },
});

export default theme;
