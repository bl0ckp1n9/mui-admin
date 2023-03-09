import { Box, Container, styled } from '@mui/material';
import Sidebar from '@/layouts/BaseLayout/Sidebar';
import { ReactNode } from 'react';
import Header from '@/layouts/BaseLayout/Header';

interface BaseLayoutProps {
    children?: ReactNode;
}

const Main = styled(Box)(({ theme }) => ({
    flex: 999,
    height: '100%',
}));

export default function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100%',
            }}
        >
            <Sidebar />

            <Main
                sx={{
                    flex: 999,
                    height: '100%',
                }}
            >
                <Header />
                <Container maxWidth="lg">{children}</Container>
            </Main>
        </Box>
    );
}
