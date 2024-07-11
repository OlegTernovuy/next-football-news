import PlayersTeam from './PlayersTeam';

import { getInfoAboutPlayer, getTeamSquad } from '../../../../api/football';

const TeamSquad = async ({ id }: { id: string }) => {
    const teamSquad = await getTeamSquad(id);

    if (teamSquad?.data === undefined) {
        return <PlayersTeam teamSquad={[]} />;
    }

    const playerDetails = await Promise.all(
        teamSquad?.data.map(async (player) => {
            const playerInfo = await getInfoAboutPlayer(player.player_id);
            return playerInfo?.data;
        })
    );

    return <PlayersTeam teamSquad={playerDetails} />;
};

export default TeamSquad;
