import TvStationCard from './TvStationCard';

import { getTvStations } from '../../../api/football';

const TvStatons = async () => {
    const tvStations = await getTvStations();

    return <TvStationCard tvStations={tvStations?.data} />;
};

export default TvStatons;
