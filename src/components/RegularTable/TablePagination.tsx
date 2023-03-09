import { Box, Pagination } from '@mui/material';
import { UsePaginationProps } from '@mui/material/usePagination';

interface TablePagination {
    count: number;
    props?: UsePaginationProps;
}

export default function TablePagination({ count, props }: TablePagination) {
    return (
        <Box sx={{ paddingY: '30px' }}>
            <Pagination
                sx={{ margin: '0 auto', width: 'fit-content' }}
                count={count}
                shape="rounded"
                {...props}
            />
        </Box>
    );
}
