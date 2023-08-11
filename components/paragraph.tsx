import {styled} from '@mui/material/styles';

const Paragraph = styled('p', {
    name:'Paragraph',
})(({ theme }) => ({
    lineHeight: 1.756,
    fontSize: '18px',
    color: theme.palette.primary.light,
    fontFamily: theme.typography.fontFamily,
    fontWeight: 400,
    transition: theme.transitions.create('background'),
    margin: '0 auto 35px',
    width: '100%',
    maxWidth: '680px',
}));

export default Paragraph;