import { styled } from 'styled-components';

const TeamInfoWrapper = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    @media (max-width: ${({ theme: { sizes } }) => sizes.tablet}) {
        flex-direction: column;
    }
`;

const InfoStyle = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleTypographyStyle = styled.h2`
    padding: 1.5rem 0;
`;

export { TeamInfoWrapper, InfoStyle, TitleTypographyStyle };
