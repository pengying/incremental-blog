import { Roboto, Merriweather } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

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
  },
});

export default theme;