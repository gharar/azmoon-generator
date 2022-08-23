import React, { FC, useMemo } from 'react'
import styled from '@mui/system/styled';
import { Box } from '@mui/material';
import TopRank from './TopRanks';
import OtherRanks from './OtherRanks';
import { normalizeStudentsData } from '../../utils/ranking';
import { rawData1, rawData2, rawData3, rawData4, rawData5, rawData6, rawData7 } from '../../data';
import background from '../../assets/background.svg';

const Root = styled(Box)({
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionY: 10,
  backgroundSize: 'contain',
  position: 'relative',
});

const Leaderboard: FC = () => {
  const finalData = useMemo(() => normalizeStudentsData(rawData7), [])

  return (
    <Root>
      {finalData.map((stage,index) => (
        <Box key={index}>
          {index < 3
            ? <TopRank data={stage} size={3 - index * 0.5} direction={index % 2 === 0 ? 'rtl' : 'ltr'} />
            : <OtherRanks data={stage} />
          }
        </Box>
      ))}
    </Root>
  );
};

export default Leaderboard;
