import { styled } from '@mui/material/styles';

const blockQuote = styled("blockquote")(({ theme }) =>  theme.unstable_sx({
    fontFamily: theme.fonts.merriweather,
    fontStyle: 'italic',
    margin: '15px auto 50px',

    '& > p': {
        fontFamily: theme.fonts.merriweather,
        maxWidth: '880px !important',
        paddingRight: '100px',
        paddingBottom: 0,
        width: '100%',
        margin: '0 auto',
        fontSize: '36px',
        lineHeight: 1.32,
        fontWeight: 'bold',
    },
}));

export default blockQuote;