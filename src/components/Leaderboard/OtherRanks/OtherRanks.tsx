import { styled, Box, Typography } from '@mui/material';
import { convertEnglishNumberToPersian } from '../../../utils/persian';
import { Data } from '../../../utils/types'

type Props = {
  data: Data,
};

const Name = styled(Box)(({ theme }) => ({
  width: 317,
  height: 72,
  marginRight: 16,
  borderRadius: 25,
  border: '1px solid #ADB5BD',
  boxShadow: '0px 3px 16px rgba(54, 14, 92, 0.12)',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
}));

const Score = styled(Box)(({ theme }) => ({
  width: 87,
  height: 72,
  marginRight: 24,
  marginLeft: 24,
  borderRadius: 25,
  boxShadow: '0px 3px 16px rgba(54, 14, 92, 0.12)',
  backgroundColor: theme.palette.common.gray,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const OtherRanks = ({ data }: Props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
      {data.map(studentItem => (
        <Box key={studentItem.name} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Typography color="text.primary" variant="h6">
            {convertEnglishNumberToPersian(studentItem.rank)}
          </Typography>
          <Name>
            <Typography color="text.primary" variant="body2" sx={{ mr: 3 }}>
              {studentItem.name}
            </Typography>
          </Name>
          <Score>
            <Typography color="text.primary" variant="body1">
              {convertEnglishNumberToPersian(studentItem.score)}
            </Typography>
          </Score>
          <Typography color="text.primary" variant="h6">%</Typography>
        </Box>
        )
      )}
    </Box>
  );
};

export default OtherRanks;
