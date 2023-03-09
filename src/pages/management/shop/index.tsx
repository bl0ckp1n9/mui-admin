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

const mockTableHead = [
    '몰',
    '숍 아이디',
    '숍 이름',
    'NFT컨트랙트 주소',
    '등록 일시',
    '수정',
    '삭제',
];

const selectRowsPerPage = [5, 10, 15];

export default function Shop() {
    const [shopData, setShopData] = useState<ShopItemsInterface | null>(null);
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(0); // 총 아이템 개수
    const [rowsPerPage, setRowsPerPage] = useState(5); // 한 페이지당 아이템 개수
    const [page, setPage] = useState(1); // page number

    const onHandlePagination = (
        e: ChangeEvent<unknown>,
        page: number
    ): void => {
        setPage(page);
    };

    const onHandleRowsPerPage = (
        e: SelectChangeEvent<HTMLInputElement | number>
    ): void => {
        const { value } = e.target;
        setRowsPerPage(parseInt(value as string));
    };

    useEffect(() => {
        fetchShopData(page, rowsPerPage).then((data) => {
            setShopData(data.contents);
            const numberOfPage = getNumberOfPage(
                data.totalNumberOfItems,
                rowsPerPage
            );
            setTotalNumberOfPages(numberOfPage);
        });
    }, [page, rowsPerPage]);

    return (
        <Box marginTop={10}>
            <Card>
                <CardHeader
                    action={
                        <Box width={150}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Rows per page</InputLabel>
                                <Select
                                    label="Rows per page"
                                    onChange={onHandleRowsPerPage}
                                    value={rowsPerPage}
                                    displayEmpty
                                    autoWidth
                                >
                                    {selectRowsPerPage.map((count) => (
                                        <MenuItem key={count} value={count}>
                                            {count}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    }
                    title="Shop"
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
