import { styled } from '@mui/material/styles';

const blockQuote = styled("blockquote")(({ theme }) =>  theme.unstable_sx({
    fontFamily: theme.fonts.merriweather,
    fontStyle: 'italic',
    maxWidth: '880px !important',
    paddingRight: '100px',
    paddingBottom: 0,
    width: '100%',
    fontSize: '28px !important',
    lineHeight: 1.32,
    fontWeight: 'bold',
    margin: '15px auto 50px',
}));

export default blockQuote;