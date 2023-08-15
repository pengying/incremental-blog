import { styled } from '@mui/material/styles';
import React from 'react';

const StyledTable = styled("table")(({ theme }) =>  theme.unstable_sx({
    position: 'relative',
    lineHeight: '1.65',
    color: theme.palette.grey[600],
    fontFamily: theme.typography.fontFamily,
    transition: theme.transitions.create('color'),
    background: theme.palette.background.card,
    margin: '45px auto 85px',
    width: '100%',
    maxWidth: '1004px',
    borderRadius: '5px',
    overflow: 'hidden',
    borderCollapse: 'separate',
    
    [theme.breakpoints.down('lg')]: {
        margin: '25px auto 65px',
    },

    [theme.breakpoints.down('sm')]: {
        maxWidth: '486px',
        margin: '15px auto 55px',
    },
}));

const Table: React.FC<{children:any}> = ({ children }) => {
    return (
        <div style={{ overflowX: "auto", padding: "0 20px" }}>
          <StyledTable>{children}</StyledTable>
        </div>
    );
}

const Head = styled("thead")(({ theme }) =>  theme.unstable_sx({
    textAlign: 'left',
    borderCollapse: 'collapse',
    postiion: 'relative',
    lineHeight: 1.756,
    fontWeight: 600,
    color: theme.palette.primary.light,
    fontFamily: theme.fonts.merriweather,
    transition: theme.transitions.create('color'),
}));

const HeadCell = styled("th")(({ theme }) =>  theme.unstable_sx({
    padding: '18px 30px',
    fontSize: '16px',
    background: theme.palette.background.card,
    [theme.breakpoints.down('lg')]: {
        padding: '14px 20px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    }
}));

const Cell = styled("th")(({ theme }) =>  theme.unstable_sx({
    borderTop: `1px solid ${theme.palette.common.horizontalRule}`,
    padding: '15px 30px',
    wordBreak: 'keep-all',
    fontSize: '16px',
    backgroundColor: theme.palette.background.card,

    [theme.breakpoints.down('lg')]: {
        padding: '14px 20px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
    }
}));

const allProps = {
    table: Table,
    thead: Head,
    th: HeadCell,
    td: Cell,
}

export default allProps;