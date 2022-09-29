import { createTheme } from '@mui/material/styles';

const fontName = 'Vazir';

export const colors = {
  textPrimary: '#101113',
  textSecondary: '#909296',
  black: '#212529',
  primary: '#922CFF',
  secondary: '#F8F9FA',
  gray: '#E9ECEF',
  white: '#FFFFFF',
};

export const typography = {
  h1: {
    fontWeight: 700,
    lineHeight: '72px',
    fontSize: 72,
  },
  h2: {
    fontWeight: 900,
    lineHeight: '72px',
    fontSize: 56,
  },
  h3: {
    fontWeight: 800,
    lineHeight: '64px',
    fontSize: 36,
  },
  h4: {
    fontWeight: 700,
    lineHeight: '58px',
    fontSize: 40,
  },
  h5: {
    fontWeight: 400,
    lineHeight: '56px',
    fontSize: 32,
  },
  h6: {
    fontWeight: 700,
    lineHeight: '52px',
    fontSize: 36,
  },
  body1: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: '46px',
  },
  body2: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: '40px',
  },
};

const theme  = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    common: colors,
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
  },
  typography: {
    fontFamily: fontName,
    ...typography,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: fontName,
          minHeight: '100vh',
          width: '100%',
          direction: 'rtl',
          backgroundColor: '#F1F3F5',
        },
      },
    },
  },
});


declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    textPrimary: string;
    textSecondary: string;
    black: string;
    primary: string;
    secondary: string;
    gray: string;
    white: string;
  }
}

export default theme;
