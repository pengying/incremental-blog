import { styled } from '@mui/material/styles';

const figCaption = styled("figcaption")(({ theme }) => ({
    color: theme.palette.grey[600],
    fontFamily: theme.fonts.merriweather,
    fontSize: '14px',
    textAlign: 'center',
    width:'100%',
    paddingTop: '6px',
}));

export default figCaption;