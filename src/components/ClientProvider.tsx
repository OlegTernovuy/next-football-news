'use client';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../../styles/GlobalStyle';

const theme = {};

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export default ClientProvider;
