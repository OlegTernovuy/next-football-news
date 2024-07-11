'use client';

import {
    Grid,
    Typography,
    CardContent,
    CardActions,
    Card,
} from '@mui/material';

import { GlobalWrapper } from '../../../../styles/GlobalStyle';
import {
    CardActionsStyle,
    CardImag,
} from '../../../../styles/FootballTeamsStyle';
import { PlayerInfo } from '../../../../types/football';

interface teamSquadProps {
    teamSquad: (PlayerInfo | undefined)[];
}

const PlayersTeam = ({ teamSquad }: teamSquadProps) => {
    return (
        <GlobalWrapper>
            <Grid container spacing={2}>
                {teamSquad &&
                    teamSquad.map((team) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={team?.id}>
                            <Card>
                                <CardImag
                                    alt={team?.name}
                                    src={team?.image_path}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {team?.display_name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        Lizards are a widespread group of
                                        squamate reptiles, with over 6,000
                                        species, ranging across all continents
                                        except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActionsStyle>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        component="span"
                                    >
                                        {team?.date_of_birth}
                                    </Typography>
                                    <CardActions>
                                        {/* <Link href={`/teams/${team.id}`}>
                                            Learn More
                                        </Link> */}
                                    </CardActions>
                                </CardActionsStyle>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </GlobalWrapper>
    );
};

export default PlayersTeam;
