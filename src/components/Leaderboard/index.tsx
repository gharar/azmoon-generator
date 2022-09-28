import { styled, Box } from '@mui/material';
import TopRank from './TopRanks';
import OtherRanks from './OtherRanks';
import { normalizeData } from '../../utils/normalizeData'
import background from '../../assets/background.svg';
import { Data } from '../../utils/types'
import { rawData1, rawData2, rawData3, rawData4, rawData5, rawData6, rawData7 } from '../../data';

const Root = styled(Box)({
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundPositionY: 10,
  backgroundSize: 'contain',
  position: 'relative',
});

const Leaderboard = () => {
  const rawData: Data = [...rawData1]
  const { firstRanks, secondRanks, thirdRanks, otherRanks } = normalizeData(rawData)

  return (
    <Root>
      <TopRank data={firstRanks} size={3} componentDirection={'row'} />
      {(secondRanks.length > 0)  && (<TopRank data={secondRanks} size={2.5} componentDirection={'row-reverse'} />)}
      {(thirdRanks.length > 0)  && (<TopRank data={thirdRanks} size={2} componentDirection={'row'} />)}
      {(otherRanks.length > 0) && (<OtherRanks data={otherRanks} />)}
    </Root>
  );
};

export default Leaderboard;
