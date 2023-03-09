// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export type ShopItemInterface = {
    mall: string;
    id: number;
    name: string;
    contractAddr: string;
    date: string;
};
export type ShopItemsInterface = Array<ShopItemInterface>;

interface RequestQueryInterface {
    start?: string;
    end?: string;
}
export interface ResponseDataInterface {
    totalNumberOfItems?: number; // 전체 아이템 개수
    start?: string;
    end?: string;
    contents?: ShopItemsInterface;
}
const mockTableContents = [
    {
        mall: 'LG생건물 (lgbeauty01)',
        id: 1,
        name: '빌리프',
        contractAddr: '0x8A7BA0f4D72c3C68c956Ab9F5B8876125C677784',
        date: '2022.06.07 22:00:21',
    },
    {
        mall: 'LG생건물 (lgbeauty01)',
        id: 2,
        name: '빌리프',
        contractAddr: '0x8A7BA0f4D72c3C68c956Ab9F5B8876125C677784',
        date: '2022.06.07 22:00:21',
    },
    {
        mall: 'LG생건물 (lgbeauty01)',
        id: 3,
        name: '빌리프',
        contractAddr: '0x8A7BA0f4D72c3C68c956Ab9F5B8876125C677784',
        date: '2022.06.07 22:00:21',
    },
    {
        mall: 'LG생건물 (lgbeauty01)',
        id: 4,
        name: '빌리프',
        contractAddr: '0x8A7BA0f4D72c3C68c956Ab9F5B8876125C677784',
        date: '2022.06.07 22:00:21',
    },
    {
        mall: 'LG생건물 (lgbeauty01)',
        id: 5,
        name: '빌리프',
        contractAddr: '0x8A7BA0f4D72c3C68c956Ab9F5B8876125C677784',
        date: '2022.06.07 22:00:21',
    },
    {
        mall: 'LG생건물 (lgbeauty01)',
        id: 6,
        name: '빌리프',
        contractAddr: '0x8A7BA0f4D72c3C68c956Ab9F5B8876125C677784',
        date: '2022.06.07 22:00:21',
    },
    {
        mall: 'LG생건물 (lgbeauty01)',
        id: 7,
        name: '빌리프',
        contractAddr: '0x8A7BA0f4D72c3C68c956Ab9F5B8876125C677784',
        date: '2022.06.07 22:00:21',
    },
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseDataInterface | string>
) {
    const { start, end }: RequestQueryInterface = req.query;
    if (start && end) {
        const itemsOfPerPage = mockTableContents.slice(
            parseInt(start),
            parseInt(end)
        );
        const resData = {
            start,
            end,
            totalNumberOfItems: mockTableContents.length,
            contents: itemsOfPerPage,
        };
        res.status(200).send(resData);
    }
    res.status(400).send('Bad Request');
}
