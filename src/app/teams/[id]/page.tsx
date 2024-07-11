import TeamInfoBlock from './TeamInfoBlock';
import TeamSquad from './TeamSquad';

import { getAboutTeam } from '../../../../api/football';

interface IFootballTeamProps {
    params: {
        id: string;
    };
}

const AboutTeam = async ({ params }: IFootballTeamProps) => {
    const { id } = params;
    const team = await getAboutTeam(id);

    return (
        <>
            <TeamInfoBlock team={team?.data} />
            <TeamSquad id={id} />
        </>
    );
};

export default AboutTeam;
