import React, { FC } from 'react';
import styled from "@mui/system/styled";
import { Box, Card, CardContent, Typography } from '@mui/material';
import { convertEnglishNumberToPersian } from '../../utils/persian';
import logo from '../../assets/logo.svg';

const TopCard = styled(Card)({
  maxWidth: 912,
  width: '100%',
  height: 336,
  marginTop: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
  boxShadow: '0px 3px 48px #B6B4B4',
});

const TopCardContent = styled(CardContent)({
  width: 912,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const BottomCard = styled(Card)({
  maxWidth: 912,
  width: '100%',
  height: 96,
  marginTop: 16,
  marginBottom: 16,
  borderRadius: 25,
  boxShadow: '0px 3px 16px rgba(54, 14, 92, 0.12)',
});

const BottomCardContent = styled(CardContent)({
  width: 912,
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const BulletIcon = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.text.secondary,
  borderRadius: '50%',
  width: 10,
  height: 10,
  marginRight: 24,
  marginLeft: 24,
}));

const TopNavigation: FC = () => {
  return (
    <Box>
      <TopCard>
        <TopCardContent>
          <Typography color="text.primary" variant="h5">نفرات برتر آزمون</Typography>
          <Typography color="primary.main" variant="h2">زیست‌شناسی پایه دوازدهم</Typography>
          <Typography color="text.secondary" variant="h3">سمینار جمع‌بندی مباحث کنکور</Typography>
          <img src={logo} alt="logo"/>
        </TopCardContent>
      </TopCard>
      <BottomCard>
        <BottomCardContent>
          <Typography color="common.black" variant="h3">سینا معصوم‌نیا</Typography>
          <BulletIcon />
          <Typography color="text.secondary" variant="h5">
            {convertEnglishNumberToPersian('13 اسفند 1401')}
          </Typography>
        </BottomCardContent>
      </BottomCard>
    </Box>
  );
};

export default TopNavigation;
