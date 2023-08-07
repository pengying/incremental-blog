import { Roboto, Merriweather } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        logo: React.CSSProperties;
    }
  
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        logo?: React.CSSProperties;
    }
  }
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      logo: true;
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
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    
    h1: {
        fontFamily: merriweather.style.fontFamily,
        fontSize: '2.8rem',
        fontWeight: 700,
      },

    logo: {
        fontFamily: merriweather.style.fontFamily,
        fontSize: '25px',
        fontWeight: 700,
    },
  },
});

export default theme;