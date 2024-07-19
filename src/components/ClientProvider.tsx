'use client';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../../styles/GlobalStyle';

const theme = {
    colors: {
        primary: '#2196f3',
    },
    sizes: {
        mobile: '640px',
        tablet: '768px',
        desktop: '1024px',
    },
};

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {children}
        </ThemeProvider>
    );
};

export default ClientProvider;
