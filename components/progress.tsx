import {clamp} from '@/lib/utils';
import { useState, useEffect } from 'react';
import throttle from "lodash/throttle";
import {styled} from '@mui/material/styles';
import theme from '@/styles/theme/mui-theme';


export interface IProgress {
  contentHeight: number;
}

const Progress: React.FC<IProgress> = ({ contentHeight }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const percentComplete = (window.scrollY / contentHeight) * 100;

      setProgress(clamp(+percentComplete.toFixed(2), -2, 104));
    }, 20);

    if (contentHeight) {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleScroll);
      };
    }
  }, [contentHeight]);

  return (
    <ProgressContainer tabIndex={-1}>
      <Trackline aria-hidden="true">
        <ProgressLine style={{ transform: `translateY(${progress}%)` }} />
      </Trackline>
    </ProgressContainer>
  );
};

export default Progress;

const ProgressContainer = styled("div")(({ theme }) => ({
  position: 'relative',
  outline: 'none',
  userSelect: 'none',
}));

const Trackline =  styled("div")(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(88vh - 40px)',
  maxHeight: '425px',
  width: '1px',
  backgroundColor: theme.palette.common.track,
  opacity: 0.6,
  overflow: 'hidden',
}));

const ProgressLine = styled("div")(({ theme }) => ({
  position: 'absolute',
  height: '100%',
  top: '-100%',
  width: '1px',
  backgroundColor: theme.palette.common.progress,
  left: 0,

}));