import styled from 'styled-components';

const GlobalWrapper = styled('div')({
    padding: '2rem 0',
});

import { createGlobalStyle } from 'styled-components';

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
`;

export { GlobalStyles, GlobalWrapper };
