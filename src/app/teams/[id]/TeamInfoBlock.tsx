'use client';

import { Typography } from '@mui/material';
import { CardImag } from '../../../../styles/FootballTeamsStyle';
import {
    InfoStyle,
    TeamInfoWrapper,
    TitleTypographyStyle,
} from '../../../../styles/FootballTeamStyle';

import { Team } from '../../../../types/football';

interface ITeamProps {
    team: Team | undefined;
}

const TeamInfoBlock = ({ team }: ITeamProps) => {
    return (
        <>
            <TeamInfoWrapper>
                <CardImag alt={team?.short_code} src={team?.image_path} />
                <InfoStyle>
                    <Typography variant="h6">{team?.name}</Typography>
                    <span>Founded in {team?.founded}</span>
                </InfoStyle>
                <InfoStyle>
                    <p>Last game {team?.last_played_at}</p>
                    <span>Gender: {team?.gender}</span>
                </InfoStyle>
            </TeamInfoWrapper>
            <TitleTypographyStyle>Team Squad</TitleTypographyStyle>
        </>
    );
};

export default TeamInfoBlock;
