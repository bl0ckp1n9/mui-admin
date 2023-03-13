import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseDataInterface } from '@/pages/api/shop';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseDataInterface | string>
) {
    const prisma = new PrismaClient();

    const { email, password } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            res.status(401).send('Does not have user');
            return;
        }

        const verifyPw = password === user.password;
        if (!verifyPw) {
            res.status(401).send('Does not have user');
        }

        res.status(200).send('success login');
    } catch (error) {
        console.log(error);
    }
}
