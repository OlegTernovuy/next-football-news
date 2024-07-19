import PaginationComponent from '../components/teams/Pagination';
import TeamCard from '../components/teams/TeamCard';

import { getTeams } from '../../api/football';

interface SearchParamsProps {
    searchParams: {
        page: string;
    };
}

export default async function Home({ searchParams }: SearchParamsProps) {
    const currentPage = Number(searchParams?.page) || 1;
    const teams = await getTeams(currentPage);

    return (
        <main>
            <TeamCard teams={teams?.data} />
            <PaginationComponent totalPages={teams?.pagination?.count} />
        </main>
    );
}
