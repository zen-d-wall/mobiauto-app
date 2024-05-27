import {
    createTheme,
    getContrastRatio,
} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteOptions {
        violet?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        violet: true;
    }
}

const violetMain = '#6d28d9';

export const buttonTheme = createTheme({
    palette: {
        violet: {
            main: violetMain,
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
});