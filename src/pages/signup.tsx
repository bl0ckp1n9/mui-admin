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
import { Email, Key, Person } from '@mui/icons-material';
import AdornmentInput from '@/components/AdornmentInput';
import { useForm } from 'react-hook-form';
import { signUp } from '@/api/signup';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import LoginLayout from '@/layouts/LoginLayout';

interface SignUpInterface {
    invite: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<SignUpInterface>();
    const router = useRouter();
    const checkConfirmPassword = (
        password: string,
        confirmPassword: string
    ): boolean => password === confirmPassword;

    const onHandleSubmit = async (data: SignUpInterface) => {
        const { email, password, confirmPassword } = data;
        const isValidPassword = checkConfirmPassword(password, confirmPassword);
        if (!isValidPassword) {
            setError(
                'confirmPassword',
                { message: '비밀번호가 일치하지 않습니다.' },
                { shouldFocus: true }
            );
        } else {
            await signUp(email, password);
        }
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
                <CardHeader title="Sign Up" />
                <CardContent>
                    <Box
                        component="form"
                        onSubmit={handleSubmit(onHandleSubmit)}
                    >
                        <FormControl variant="standard">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <AdornmentInput
                                        adornment={
                                            <InputAdornment position="start">
                                                <Email fontSize="large" />
                                            </InputAdornment>
                                        }
                                        props={{
                                            id: 'invite',
                                            type: 'text',
                                            variant: 'standard',
                                            fullWidth: true,
                                            ...register('invite'),
                                        }}
                                    />
                                </Grid>
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
                                    <AdornmentInput
                                        adornment={
                                            <InputAdornment position="start">
                                                <Key fontSize="large" />
                                            </InputAdornment>
                                        }
                                        props={{
                                            id: 'confirmPassword',
                                            variant: 'standard',
                                            type: 'password',
                                            fullWidth: true,
                                            ...register('confirmPassword'),
                                        }}
                                    />
                                    {errors.confirmPassword && (
                                        <p style={{ color: 'red' }}>
                                            {errors.confirmPassword.message}
                                        </p>
                                    )}
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        fullWidth
                                        sx={{
                                            height: '50px',
                                        }}
                                    >
                                        운용자 등록
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
                        <Button onClick={() => router.push('/signin')}>
                            로그인
                        </Button>
                    </Box>
                </CardActions>
            </Card>
        </>
    );
}
SignUp.getLayout = function getLayout(page: ReactElement) {
    return <LoginLayout>{page}</LoginLayout>;
};
