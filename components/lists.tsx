import { styled } from '@mui/material/styles';

const orderedList =  styled('ol')(({ theme }) => theme.unstable_sx({
  listStyle: 'none',
  counterReset: 'list',
  color: theme.palette.primary.light,
  position: 'relative',
  padding: '15px 0 30px 30px',
  margin: ' 0 auto',
  transition: theme.transitions.create('color'),
  fontSize: '18px',
  width: '100%',
  maxWidth: {
    sm: 486,
    md: 680,
  },
  paddingLeft: {
    sm: '20px',
  },
  'li' : {
    position: 'relative',
    paddingBottom: '15px',
    paddingLeft: {
        sm: '20px',
    },
    'p' : {
        padding: {
            sm: 0,
        }
    }
  },
  'li > :not(ol, ul)': {
    display: 'inline',
  },
  'li::before' :{
    width: '3rem',
    display: 'inline-block',
    position: 'absolute',
    counterIncrement: 'list',
    content: 'counter(list) \'.\'',
    fontWeight: 'bold',
    left: {
        sm:'-1.3rem',
    },
    top: '-0.14rem',
    fontSize: '1.3rem',
    color: theme.palette.primary.light
  },
}));

const unorderedList =  styled('ul')(({ theme }) => theme.unstable_sx({
    listStyle: 'none',
    counterReset: 'list',
    color: theme.palette.primary.light,
    position: 'relative',
    padding: '15px 0 30px 30px',
    margin: ' 0 auto',
    transition: theme.transitions.create('color'),
    fontSize: '18px',
    width: '100%',
    maxWidth: {
      sm: 486,
      md: 680,
    },
    paddingLeft: {
      sm: '20px',
    },
    'li' : {
      position: 'relative',
      paddingBottom: '15px',
      paddingLeft: {
          sm: '20px',
      },
      'p' : {
          padding: {
              sm: 0,
          }
      }
    },
    'li > :not(ol, ul)': {
      display: 'inline',
    },
    'li::before' :{
      display: 'inline-block',
      position: 'absolute',
      content: '""',
      top: '10px',
      height: '8px',
      width: '8px',
      fontWeight: 'bold',
      left: {
          sm:'-1.3rem',
      },
      fontSize: '1.3rem',
      background: theme.palette.primary.light
    },
}));

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ol: orderedList,
    ul: unorderedList,
};