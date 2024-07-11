'use client';

import Link from 'next/link';

import { Grid } from '@mui/material';
import { SingleTvStation, TvStationImg } from '../../../styles/TvStationsStyle';

import { TvStations } from '../../../types/football';

interface TvStationsProps {
    tvStations: TvStations[] | undefined;
}

const TvStationCard = ({ tvStations }: TvStationsProps) => {
    return (
        <Grid container spacing={3} component="ul">
            {tvStations &&
                tvStations.map((station) => (
                    <Grid
                        key={station.id}
                        item
                        xs={6}
                        sm={4}
                        md={3}
                        lg={2}
                        component="li"
                    >
                        <SingleTvStation>
                            <TvStationImg
                                src={station.image_path}
                                alt={station.name}
                                width={150}
                                height={53}
                            />
                            <span>{station.name}</span>
                            <Link href={station.url} target="_blank">
                                Watch Chanel
                            </Link>
                        </SingleTvStation>
                    </Grid>
                ))}
        </Grid>
    );
};

export default TvStationCard;
