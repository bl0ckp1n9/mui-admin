import { Box, styled } from '@mui/material';
import SidebarMenu from '@/layouts/BaseLayout/Sidebar/SidebarMenu';

const SidebarWrapper = styled(Box)(({ theme }) => ({
    // The result is 'var(--joy-palette-primary-500)'
    flexBasis: theme.sidebar.width,
    flexGrow: 1,
}));

export default function Sidebar() {
    return (
        <SidebarWrapper
            sx={{
                backgroundColor: 'white',
                boxShadow: '0px 0px 2px rgba(0,0,0,0.5)',
            }}
        >
            <SidebarMenu />
        </SidebarWrapper>
    );
}
