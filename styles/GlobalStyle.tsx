import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    overflow-x: hidden;
    max-width: 1100px;
    text-align: center;
    margin: 0 auto;
    padding: 0;
  }

    body {
        padding: 2rem;
    }

    a {
        text-decoration: none;
        color: ${({ theme: { colors } }) => colors.primary};
    }

    ul {
        list-style-type: none;
    }
`;

const GlobalWrapper = styled.div`
    padding-bottom: '2rem';
`;

export { GlobalStyles, GlobalWrapper };
