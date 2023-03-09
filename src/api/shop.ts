import { instance } from './axios';

// 아직 에러핸들링 못함
export const fetchShopData = async (
    pageNumber: number,
    itemsCountOfPerPage: number
) => {
    let start = pageNumber - 1;
    if (pageNumber != 1) {
        start *= itemsCountOfPerPage;
    }
    const end = pageNumber * itemsCountOfPerPage;
    const res = await instance.get('api/shop', {
        params: {
            start,
            end,
        },
    });
    return res.data;
};
