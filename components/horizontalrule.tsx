import { styled } from '@mui/material/styles';

const horizontalRule = styled("hr")(({ theme }) => theme.unstable_sx({
    position: 'relative',
    width: {
        md: 'calc(100vw - 40px)',
        lg: '100%',
    },
    maxWidth: {
        sm:486,
        md:507,
        lg:680,
    },
    margin: {
        sm: '0 auto 50px',
        md: '50px auto',
    },
    border: 0,
    height: '14.36px',
    padding: {
        md: '0 20px',
    },
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='10' height='15' viewBox='0 0 10 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.567383' y='14.1777' width='16' height='1' transform='rotate(-60 0.567383 14.1777)' fill='%232D2E33'/%3E%3C/svg%3E\")",
    backgroundRepeat: 'repeat-x',
    boxSizing: 'border-box',
    backgroundPosition: 'center',
}));

export default horizontalRule;