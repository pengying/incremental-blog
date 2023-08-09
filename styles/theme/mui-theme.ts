import { Roboto, Merriweather } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface TypographyVariants {
        logo: React.CSSProperties;
        heroFooter: React.CSSProperties;
        heroTitle: React.CSSProperties;
        heroBody: React.CSSProperties;
        quote: React.CSSProperties;
        heroAuthor: React.CSSProperties;
    }
  
    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        logo?: React.CSSProperties;
        heroFooter?: React.CSSProperties;
        heroTitle?: React.CSSProperties;
        heroBody?: React.CSSProperties;
        quote?: React.CSSProperties;
        heroAuthor?: React.CSSProperties;
    }
  }
// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      logo: true;
      heroFooter:true;
      heroTitle: true;
      heroBody: true;
      quote: true;
      heroAuthor: true;
    }
  }
  
const roboto = Roboto({
  weight: ['100','300', '400', '500', '700'],
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
    action: {
      hover: '#ffcf74',
      hoverOpacity:1
    },
    grey: {
        600: '#73737D'
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    
    heroTitle: {
      fontFamily: merriweather.style.fontFamily,
      fontSize: '1.5rem',
      fontWeight: 400,
    },

    heroBody: {
      fontFamily: roboto.style.fontFamily,
      fontSize: '1rem',
      fontWeight: 300,
      color: '#73737D'
    },

    heroFooter: {
      fontFamily: roboto.style.fontFamily,
      fontSize: '1rem',
      fontWeight: 700,
      color: '#73737D',
      opacity: 0.33
    },

    quote: {
        fontFamily: roboto.style.fontFamily,
        fontSize: '3.0rem',
        fontWeight: 700,
      },

    heroAuthor: {
        fontFamily: roboto.style.fontFamily,
        fontSize: '14px',
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