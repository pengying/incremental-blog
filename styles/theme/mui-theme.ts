import { Roboto, Merriweather } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        logo: React.CSSProperties;
        quote: React.CSSProperties;
        heroAuthor: React.CSSProperties;
    }
  
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        logo?: React.CSSProperties;
        quote?: React.CSSProperties;
        heroAuthor?: React.CSSProperties;
    }
  }
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      logo: true;
      quote: true;
      heroAuthor: true;
    }
  }
  
const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});
const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap'
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
        default: '#111216',
    },
    secondary: {
      main: '#ffcf74',
    },
    grey: {
        600: '#73737D'
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h1: {
      fontFamily: merriweather.style.fontFamily,
      fontSize: '1.5rem',
      fontWeight: 400,
    },

    quote: {
        fontFamily: roboto.style.fontFamily,
        fontSize: '3.0rem',
        fontWeight: 700,
        lineHeight: 1.15,
      },

    heroAuthor: {
        fontFamily: roboto.style.fontFamily,
        fontSize: '13px',
        fontWeight: 300,
        color: '#73737D'
      },

    logo: {
        fontFamily: merriweather.style.fontFamily,
        fontSize: '1.5rem',
        fontWeight: 400,
    },
  },
});

export default theme;