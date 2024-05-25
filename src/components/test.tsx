import * as React from 'react';
import {
  createTheme,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/system';
import { Typography } from '@mui/material';
import { buttonTheme } from '@/utils/mui-styling';


export default function UsingStylesUtils() {
  return (
    <ThemeProvider theme={buttonTheme}>
      <Button variant="contained" color="violet">
        Violet
      </Button>
    </ThemeProvider>
  );
}
