import { Box, Skeleton, styled, Typography, useTheme } from '@mui/material';
import { LogoutRounded } from '@mui/icons-material';

const HeaderWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    minHeight: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2, 1),
    boxShadow: '2px 0px 2px  rgba(0,0,0,0.5)',
}));
export default function Header() {
    const theme = useTheme();
    return (
        <HeaderWrapper>
            <Typography variant="h4" sx={{ marginLeft: theme.spacing(2) }}>
                Coredot
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: theme.spacing(2),
                }}
            >
                <Skeleton variant="circular" width={50} height={50} />
                <Typography>Admin(joon951019)</Typography>
                <LogoutRounded
                    sx={{
                        width: '40px',
                        height: '30px',
                        color: theme.colors.primary,
                        ':hover': {
                            color: theme.colors.error,
                        },
                    }}
                />
            </Box>
        </HeaderWrapper>
    );
}
