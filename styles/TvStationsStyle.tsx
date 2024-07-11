import Image from 'next/image';
import { styled } from 'styled-components';

const SingleTvStation = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const TvStationImg = styled(Image)`
    margin: 0 auto;
`;

export { SingleTvStation, TvStationImg };
