import {
    Box,
    Card,
    CardHeader,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TableCell,
    TableRow,
    Typography,
} from '@mui/material';
import BaseLayout from '@/layouts/BaseLayout';
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import RegularTable from '@/components/RegularTable';
import { ShopItemsInterface } from '@/pages/api/shop';
import { getNumberOfPage } from '@/utils/getNumberOfPage';
import TablePagination from '@/components/RegularTable/TablePagination';
import { fetchShopData } from '@/api/shop';
import { string } from 'prop-types';

const mockTableHead = [
    '몰',
    '숍 아이디',
    '숍 이름',
    'NFT컨트랙트 주소',
    '등록 일시',
    '수정',
    '삭제',
];

export const mockTableContents = [
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

export default function Shop() {
    const [shopData, setShopData] = useState<ShopItemsInterface | null>(null);
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(0); // 총 아이템 개수
    const [rowsPerPage, setRowsPerPage] = useState('5'); // 한 페이지당 아이템 개수
    const [page, setPage] = useState(1); // page number

    const onHandlePagination = (
        e: ChangeEvent<unknown>,
        page: number
    ): void => {
        setPage(page);
    };

    const onHandleRowsPerPage = (
        e: SelectChangeEvent<HTMLInputElement | string>
    ): void => {
        const { value } = e.target;
        setRowsPerPage(value as string);
    };

    useEffect(() => {
        const rowsPerPageInt = parseInt(rowsPerPage);
        fetchShopData(page, rowsPerPageInt).then((data) => {
            setShopData(data.contents);
            const numberOfPage = getNumberOfPage(
                data.totalNumberOfItems,
                rowsPerPageInt
            );
            setTotalNumberOfPages(numberOfPage);
        });
    }, [page, rowsPerPage]);

    return (
        <Box>
            <Card>
                <CardHeader
                    action={
                        <Box width={150}>
                            <FormControl fullWidth>
                                <InputLabel>Rows per page</InputLabel>
                                <Select
                                    onChange={onHandleRowsPerPage}
                                    value={rowsPerPage}
                                    defaultValue={rowsPerPage}
                                >
                                    <MenuItem value={5}>5</MenuItem>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={15}>15</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    }
                />
                <RegularTable
                    types={mockTableHead}
                    pagination={
                        <TablePagination
                            count={totalNumberOfPages}
                            props={{
                                page,
                                onChange: onHandlePagination,
                            }}
                        />
                    }
                >
                    {shopData?.map((content, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Typography>{content.mall}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{content.id}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{content.name}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{content.contractAddr}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{content.date}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>[수정]</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>[삭제]</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </RegularTable>
            </Card>
        </Box>
    );
}

Shop.getLayout = (page: ReactElement) => <BaseLayout>{page}</BaseLayout>;
