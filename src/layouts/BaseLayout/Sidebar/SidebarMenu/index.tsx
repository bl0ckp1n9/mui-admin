import { Box, List, ListItem, styled, Typography } from '@mui/material';
import {
    Home,
    KeyboardArrowRight,
    ReceiptLongOutlined,
    AddShoppingCart,
} from '@mui/icons-material';
import Link from 'next/link';

const MenuWrapper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
}));

const SubMenuWrapper = styled(Box)(({ theme }) => ({
    '& .MuiListItem-root a': {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
    },
    '& .MuiListItem-root .MuiBox-root': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
    color: theme.colors.alpha.black[70],
}));
export default function SidebarMenu() {
    return (
        <MenuWrapper>
            <SubMenuWrapper>
                <SubTitle>Dashboard</SubTitle>
                <List>
                    <ListItem>
                        <Link href="/">
                            <Box>
                                <Home />
                                Home
                            </Box>
                            <KeyboardArrowRight />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/management/shop">
                            <Box>
                                <AddShoppingCart />
                                Shop
                            </Box>
                            <KeyboardArrowRight />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="/transactions">
                            <Box>
                                <ReceiptLongOutlined />
                                Transactions
                            </Box>
                            <KeyboardArrowRight />
                        </Link>
                    </ListItem>
                </List>
            </SubMenuWrapper>
        </MenuWrapper>
    );
}
