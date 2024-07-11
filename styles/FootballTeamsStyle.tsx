import { styled } from 'styled-components';

const CardImag = styled.img`
    width: 150px;
    height: 150px;
`;

const PaginationStyle = styled.div`
    display: flex;
    justify-content: center;
`;

const CardActionsStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px;
    > span {
        margin: 0;
    }
`;

export { CardImag, PaginationStyle, CardActionsStyle };
