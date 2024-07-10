'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import Pagination from '@mui/material/Pagination';
import { PaginationStyle } from '../../../styles/FootballTeamsStyle';

const PaginationComponent = ({
    totalPages,
}: {
    totalPages: number | undefined;
}) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const currentPage = Number(searchParams.get('page')) || 1;
    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set('page', String(value));
        router.push(`${pathname}?${currentParams.toString()}`);
    };

    return (
        <PaginationStyle>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
            />
        </PaginationStyle>
    );
};

export default PaginationComponent;
