import { alpha, createTheme } from '@mui/material';

const themeColors = {
    primary: '#008aff',
    secondary: '#b790cf',
    success: '#57CA22',
    warning: '#FFA319',
    error: '#FF1943',
    info: '#33C2FF',
    black: '#223354',
    white: '#ffffff',
    primaryAlt: '#000C57',
};

const colors = {
    primary: themeColors.primary,
    secondary: themeColors.secondary,
    alpha: {
        white: {
            5: alpha(themeColors.white, 0.02),
            10: alpha(themeColors.white, 0.1),
            30: alpha(themeColors.white, 0.3),
            50: alpha(themeColors.white, 0.5),
            70: alpha(themeColors.white, 0.7),
            100: themeColors.white,
        },
        black: {
            5: alpha(themeColors.black, 0.02),
            10: alpha(themeColors.black, 0.1),
            30: alpha(themeColors.black, 0.3),
            50: alpha(themeColors.black, 0.5),
            70: alpha(themeColors.black, 0.7),
            100: themeColors.black,
        },
    },
};

export const DefaultTheme = createTheme({
    sidebar: {
        width: '290px',
    },
    components: {
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: themeColors.primary,
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    textAlign: 'center',
                },
            },
        },

        MuiCssBaseline: {
            styleOverrides: {
                'html, body': {
                    width: '100vw',
                    height: '100vh',
                },
                body: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                    width: '100%',
                    flex: 1,
                },
                '#__next': {
                    width: '100%',
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                },
                html: {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100%',
                },
                a: {
                    color: themeColors.black,
                    textDecoration: 'none',
                    outline: 'none',
                    '&:hover,&:active': {
                        textDecoration: 'none',
                    },
                },
            },
        },
    },
    colors: colors,
});
