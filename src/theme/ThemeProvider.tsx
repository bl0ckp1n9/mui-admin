import React from 'react';
import { ThemeProvider } from '@mui/material';
import { themeCreator } from '@/theme/theme';

interface ThemeProviderWrapperProps {
    children?: React.ReactNode;
}

export default function ThemeProviderWrapper({
    children,
}: ThemeProviderWrapperProps) {
    const theme = themeCreator();
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
