import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    FormControl,
    Grid,
    Input,
    InputAdornment,
    styled,
    Typography,
} from '@mui/material';
import { Email, Key, Person } from '@mui/icons-material';
import AdornmentInput from '@/components/AdornmentInput';
import { useForm } from 'react-hook-form';
import { signUp } from '@/api/signup';

const SignInContainer = styled(Box)(({ theme }) => ({
    height: '700px',
    width: '400px',
}));

interface SignInInterface {
    email: string;
    password: string;
}

export default function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<SignInInterface>();
    const onHandleSubmit = async (data: SignInInterface) => {
        const { email, password } = data;
        console.log(email, password);
    };
    return (
        <Box
            sx={{
                height: '100%',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                }}
            >
                <SignInContainer>
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{ textAlign: 'center', marginBottom: '2rem' }}
                        >
                            LG 생활 건강
                        </Typography>
                    </Box>
                    <Card sx={{ boxShadow: 3 }}>
                        <CardHeader title="Sign In" />
                        <CardContent>
                            <Box
                                component="form"
                                onSubmit={handleSubmit(onHandleSubmit)}
                            >
                                <FormControl>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <AdornmentInput
                                                adornment={
                                                    <InputAdornment position="start">
                                                        <Person fontSize="large" />
                                                    </InputAdornment>
                                                }
                                                props={{
                                                    id: 'email',
                                                    type: 'email',
                                                    variant: 'standard',
                                                    fullWidth: true,
                                                    ...register('email'),
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <AdornmentInput
                                                adornment={
                                                    <InputAdornment position="start">
                                                        <Key fontSize="large" />
                                                    </InputAdornment>
                                                }
                                                props={{
                                                    id: 'password',
                                                    type: 'password',
                                                    variant: 'standard',
                                                    fullWidth: true,
                                                    ...register('password'),
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                </FormControl>
                            </Box>
                        </CardContent>
                        <CardActions sx={{ marginTop: '2rem' }}>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ height: '50px' }}
                            >
                                Login
                            </Button>
                        </CardActions>
                        <CardActions>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginX: 'auto',
                                }}
                            >
                                <Button>비밀번호 재설정</Button>
                                <Divider
                                    orientation="vertical"
                                    variant="middle"
                                    flexItem
                                />
                                <Button>운용자 등록</Button>
                            </Box>
                        </CardActions>
                    </Card>
                </SignInContainer>
            </Box>
        </Box>
    );
}
