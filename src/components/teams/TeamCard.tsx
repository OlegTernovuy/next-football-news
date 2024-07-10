'use client';

import {
    Grid,
    Typography,
    Button,
    CardContent,
    CardActions,
    Card,
} from '@mui/material';

import { CardImag } from '../../../styles/FootballTeamsStyle';
import { GlobalWrapper } from '../../../styles/GlobalStyle';

import { Teams } from '../../../types/football';

interface teamsProps {
    teams: Teams[] | undefined;
}

const TeamCard = ({ teams }: teamsProps) => {
    return (
        <GlobalWrapper>
            <Grid container spacing={2}>
                {teams &&
                    teams.map((team) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={team.id}>
                            <Card>
                                <CardImag
                                    alt={team.short_code}
                                    src={team.image_path}
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        {team.name}
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
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
            </Grid>
        </GlobalWrapper>
    );
};

export default TeamCard;
