'use client';

import { createTheme } from '@mui/material/styles';

const baseTheme = {
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: 'inherit', // 👈 فونت از html/body میاد///
  },
};

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    background: {
      default: '#1e1e2f',
      paper: '#27293d',
    },
    primary: { main: '#7367f0' },
    secondary: { main: '#9c27b0' },
    text: {
      primary: '#b0b0b0',
      secondary: '#e0e0e0',
    },
  },
});

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    background: {
      default: '#d9d9e1',
      paper: '#ffffff',
    },
    primary: { main: '#7367f0' },
    secondary: { main: '#9c27b0' },
    text: {
      primary: '#2c2c2c',
      secondary: '#666666',
    },
  },
});
