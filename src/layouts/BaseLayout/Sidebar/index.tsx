import { Box, styled } from '@mui/material';
import SidebarMenu from '@/layouts/BaseLayout/Sidebar/SidebarMenu';

const SidebarWrapper = styled(Box)(({ theme }) => ({
    // The result is 'var(--joy-palette-primary-500)'
    flexBasis: theme.sidebar.width,
    flexGrow: 1,
    backgroundColor: theme.colors.alpha.black[10],
}));

export default function Sidebar() {
    return (
        <SidebarWrapper sx={{}}>
            <SidebarMenu />
        </SidebarWrapper>
    );
}
