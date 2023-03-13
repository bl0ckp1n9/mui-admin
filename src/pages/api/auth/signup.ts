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
        const response = await prisma.user.create({
            data: {
                email,
                password,
            },
        });
        console.log(response);
        res.status(200).send(JSON.stringify(response));
    } catch (error) {
        console.log(error);
    }
}
