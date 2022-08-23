import React, { FC } from 'react';
import styled from '@mui/system/styled';
import { Box, Typography } from '@mui/material';
import { convertEnglishNumberToPersian } from '../../../utils/persian';

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
  backgroundColor: theme.palette.common.lightGray,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const OtherRanks: FC<Props> = ({ data }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
      {data.map(studentItem => {
        if(!!studentItem) {
          return (
            <Box key={studentItem.name} sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Typography color="text.primary" variant="h6">
                {convertEnglishNumberToPersian(data.indexOf(studentItem) + studentItem.rank)}
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
        }
      })}
    </Box>
  );
};

export default OtherRanks;
