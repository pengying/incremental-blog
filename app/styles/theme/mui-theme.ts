import { Roboto, Merriweather } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        logo: React.CSSProperties;
        quote: React.CSSProperties;
    }
  
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        logo?: React.CSSProperties;
        quote?: React.CSSProperties;
    }
  }
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      logo: true;
      quote: true;
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
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    
    quote: {
        fontFamily: roboto.style.fontFamily,
        fontSize: '3.0rem',
        fontWeight: 700,
        lineHeight: 1.15,
      },

    logo: {
        fontFamily: merriweather.style.fontFamily,
        fontSize: '25px',
        fontWeight: 400,
    },
  },
});

export default theme;