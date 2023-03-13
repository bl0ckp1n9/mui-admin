import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// nextAuth는 사실 소셜 로그인을 하기 위한 것
export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            id: 'user-credentials',
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'email',
                    type: 'text',
                    placeholder: '아이디를 입력하세요',
                },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                const { email, password } = credentials!;
                // 기타 사용자 검증 로직 코드 ...
                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });
                if (!user) return null;

                const verifyPw = password === user.password;
                if (!verifyPw) return null;

                return user;
            },
        }),
    ],
    secret: 'test',
    pages: {
        error: '/admin/error',
        signOut: '/admin',
    },
    session: {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60,
        updateAge: 2 * 24 * 60 * 60,
    },
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token, user }) {
            return session;
        },
        async redirect({ url, baseUrl }) {
            if (url.startsWith('/')) {
                return `${baseUrl}${url}`;
            } else if (new URL(url).origin === baseUrl) {
                return `${baseUrl}`;
            }
            return baseUrl;
        },
    },
});
