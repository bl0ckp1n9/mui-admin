import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    FormControl,
    Grid,
    InputAdornment,
    styled,
    Typography,
} from '@mui/material';
import { Key, Person } from '@mui/icons-material';
import AdornmentInput from '@/components/AdornmentInput';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import LoginLayout from '@/layouts/LoginLayout';
import { ReactElement } from 'react';

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
    const router = useRouter();
    const { data: session, status } = useSession();
    const onHandleSubmit = async (data: SignInInterface) => {
        const { email, password } = data;
        const resp = await signIn('user-credentials', {
            email,
            password,
            redirect: false,
        });
    };
    return (
        <>
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
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        fullWidth
                                        sx={{ height: '50px' }}
                                    >
                                        로그인
                                    </Button>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Box>
                </CardContent>
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
                        <Button onClick={() => router.push('/signup')}>
                            운용자 등록
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </>
    );
}

SignIn.getLayout = function getLayout(page: ReactElement) {
    return <LoginLayout>{page}</LoginLayout>;
};
