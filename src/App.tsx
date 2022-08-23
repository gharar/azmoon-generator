import React, { useRef } from 'react'
import styled from '@mui/system/styled';
import { Box, Fab } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import TopNavigation from './components/TopNavigation';
import Leaderboard from './components/Leaderboard';
import exportAsImage from './utils/exportAsImage';

const Root = styled(Box)({
  width: '100%',
  paddingBottom: 240,
});

const Home = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const SaveButton = styled(Fab)({
  position: 'fixed',
  bottom: 48,
  right: 48,
  zoom: 2,
});

const App = () => {
  const exportRef = useRef<HTMLElement>();

  return(
    <Root>
      <Home ref={exportRef}>
        <TopNavigation />
        <Leaderboard/>
      </Home>
      <SaveButton
        size="large"
        color="primary"
        aria-label="download"
        onClick={() => exportAsImage(exportRef.current, "leaderboard")}
      >
        <DownloadIcon />
      </SaveButton>
    </Root>
  );
};

export default App;
