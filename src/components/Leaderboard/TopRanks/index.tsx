import React, { FC } from 'react';
import styled from '@mui/system/styled';
import { Box, Typography } from '@mui/material';
import { convertEnglishNumberToPersian } from '../../../utils/persian';

type Props = {
  data: Data,
  size: number,
  direction: any,
};

const Container = styled(Box)({
  width: '100%',
  marginTop: 24,
  marginBottom: 24,
  display: 'flex',
  justifyContent: 'center',
});

const OuterOval = styled(Box)(({ theme }) => ({
  borderRadius: 196,
  boxShadow: '0px 0px 52px #DFC0FF, 0px 0px 3px #7C2CFF',
  backgroundColor: theme.palette.common.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: 8,
  marginRight: 8,
}));

const InnerOval = styled(Box)(({ theme }) => ({
  borderRadius: 196,
  boxShadow: '0px 0px 15px #702CFF',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Name = styled(Box)(({ theme }) => ({
  height: 78,
  borderRadius: 25,
  border: '1px solid #922CFF',
  boxShadow: '0px 3px 16px rgba(54, 14, 92, 0.12)',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
}));

const Score = styled(Box)(({ theme }) => ({
  width: 90,
  height: 78,
  marginRight: 24,
  marginLeft: 24,
  borderRadius: 25,
  boxShadow: '0px 3px 16px rgba(54, 14, 92, 0.12)',
  backgroundColor: theme.palette.common.lightGray,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const TopRank: FC<Props> = ({ data, size, direction }) => {
  return (
    <Container flexDirection={direction === 'rtl' ? 'row' : 'row-reverse'}>
      <OuterOval width={`${size*7.41}rem`} height={`${size*5.5}rem`}>
        <InnerOval width={`${size*6.1}rem`} height={`${size*4.18}rem`}>
          <Typography color="common.white" variant="h4" fontSize={`${size*8+16}px`} sx={{ ml: 1 }}>رتبه</Typography>
          <Typography color="common.white" variant="h1" fontSize={`${(size-1)*36}px`}>
            {convertEnglishNumberToPersian(data[0].rank)}
          </Typography>
        </InnerOval>
      </OuterOval>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: `${size*42-33}px` }}>
        {data.map(studentItem => (
          <Box key={studentItem.name} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Name width={`${(size*14)-30+352}px`}>
              <Typography color="primary.main" variant="body1" sx={{ mr: 4 }}>{studentItem.name}</Typography>
            </Name>
            <Score>
              <Typography color="text.primary" variant="body1">
                {convertEnglishNumberToPersian(studentItem.score)}
              </Typography>
            </Score>
            <Typography color="text.primary" variant="h3">%</Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default TopRank;
