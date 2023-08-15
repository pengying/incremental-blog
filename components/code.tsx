import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// TODO(peng): Finish this later

interface CopyProps {
    toCopy: string
  }

  const Copy: React.FC<CopyProps> = ({ toCopy }) => {
    const [hasCopied, setHasCopied] = useState<boolean>(false);
  
    function copyToClipboardOnClick() {
      if (hasCopied) return;
  
      navigator.clipboard.writeText(toCopy);
      setHasCopied(true);
  
      setTimeout(() => {
        setHasCopied(false);
      }, 2000);
    }
  
    return (
      <CopyButton onClick={copyToClipboardOnClick} data-a11y="false">
        {hasCopied ? (
          <>
            Copied <ContentCopyIcon fill="#6f7177" />
          </>
        ) : (
          <>
            Copy <ContentCopyIcon fill="#6f7177" />
          </>
        )}
      </CopyButton>
    );
  };
  
  const Code: React.FC<{props:any, children:any}> = ({ props, children }) => {
    return (
        <code {...props}>
            <CopyButton></CopyButton>
            {children}
        </code>
    );
}

  const CopyButton = styled(Button)(({ theme }) =>  theme.unstable_sx({
    position: 'absolute',
    right: '22px',
    top: '24px',
    padding: '8px  12px 7px',
    borderRadius: '5px',
    color: theme.palette.common.copy,
    transition: 'background 0.3s ease',

    '&:hover': {
        background: 'rgba(255, 255, 255, 0.07)'
    },

    [theme.breakpoints.down('sm')]: {
        display: 'none',
    }
  }));
