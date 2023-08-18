import {styled} from '@mui/material/styles';

const Paragraph = styled('p', {
    name:'Paragraph',
})(({ theme }) => theme.unstable_sx({
    lineHeight: 1.756,
    fontSize: '18px',
    color: theme.palette.primary.light,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 400,
    transition: theme.transitions.create('background'),
    margin: '0 auto 35px',
    width: '100%',
    maxWidth: {
        sm: 486,
        md: 680,
    }, 
    'b': {
        fontWeight: 900,
    },
    'a:link': {
        color: theme.palette.action.hover,
        textDecoration: 'none',
    }, 
    'a:visited' : {
        color: theme.palette.action.hover,
        textDecoration: 'none',
      }
}));

export default Paragraph;