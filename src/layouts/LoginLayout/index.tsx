import { ReactNode } from 'react';
import { Box, styled } from '@mui/material';

interface LoginLayoutProps {
    children?: ReactNode;
}

const Container = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
}));
const Content = styled(Box)(() => ({
    height: '700px',
    width: '400px',
}));
export default function LoginLayout({ children }: LoginLayoutProps) {
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
            }}
        >
            <Container>
                <Content>{children}</Content>
            </Container>
        </Box>
    );
}
