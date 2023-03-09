import {
    Box,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

interface TableProps {
    children?: React.ReactNode;
    types?: string[];
    pagination?: React.ReactNode;
}

export default function RegularTable({
    children,
    types,
    pagination,
}: TableProps) {
    return (
        <Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {types?.map((type, index) => (
                                <TableCell key={index}>{type}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>{children}</TableBody>
                </Table>
                {pagination}
            </TableContainer>
        </Box>
    );
}
