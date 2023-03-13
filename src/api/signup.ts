import { instance } from './axios';

// 아직 에러핸들링 못함
export const signUp = async (email: string, password: string) => {
    const res = await instance.post('api/auth/signup', {
        email,
        password,
    });
    return res.data;
};
