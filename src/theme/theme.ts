import { DefaultTheme } from '@/theme/schemes/DefaultTheme';
import { Theme } from '@mui/material';

export function themeCreator(): Theme {
    return DefaultTheme;
}

declare module '@mui/material/styles/createTheme' {
    interface Theme {
        sidebar: {
            width: string;
        };
        colors: {
            primary: string;
            secondary: string;
            alpha: {
                white: {
                    5: string;
                    10: string;
                    30: string;
                    50: string;
                    70: string;
                    100: string;
                };
                black: {
                    5: string;
                    10: string;
                    30: string;
                    50: string;
                    70: string;
                    100: string;
                };
            };
        };
    }

    interface ThemeOptions {
        sidebar: {
            width: string;
        };
        colors: {
            primary: string;
            secondary: string;
            alpha: {
                white: {
                    5: string;
                    10: string;
                    30: string;
                    50: string;
                    70: string;
                    100: string;
                };
                black: {
                    5: string;
                    10: string;
                    30: string;
                    50: string;
                    70: string;
                    100: string;
                };
            };
        };
    }
}
