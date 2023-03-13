import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProviderWrapper from '@/theme/ThemeProvider';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <>
            <SessionProvider session={session}>
                <ThemeProviderWrapper>
                    <CssBaseline />
                    {getLayout(<Component {...pageProps} />)}
                </ThemeProviderWrapper>
            </SessionProvider>
        </>
    );
}
