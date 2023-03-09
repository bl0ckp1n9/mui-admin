import { Box } from '@mui/material';
import Sidebar from '@/layouts/BaseLayout/Sidebar';

interface BaseLayoutProps {
    children?: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                height: '100%',
            }}
        >
            <Sidebar />

            <Box
                sx={{
                    flex: 999,
                    paddingX: '2rem',
                    paddingY: '4rem',
                }}
            >
                {children}
            </Box>
        </Box>
    );
}
