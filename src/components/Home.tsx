import * as React from 'react';
import { styled, Box, Fab } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import TopNavigation from './TopNavigation/TopNavigation';
import Leaderboard from './Leaderboard/Leaderboard';
import exportAsImage from '../utils/exportAsImage';

const Root = styled(Box)({
  width: '100%',
  paddingBottom: 240,
});

const Page = styled(Box)({
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

const Home = () => {
  const exportRef = React.useRef<HTMLElement>();

  return(
    <Root>
      <Page ref={exportRef}>
        <TopNavigation />
        <Leaderboard/>
      </Page>
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

export default Home;
