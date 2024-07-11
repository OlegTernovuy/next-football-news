'use client';

import Link from 'next/link';

import { HeaderStyle } from '../../styles/HeaderStyle';

const Header = () => {
    return (
        <HeaderStyle>
            <Link href={'/'}>Teams</Link>
            <Link href={'/tvStations'}>TV-Stations</Link>
        </HeaderStyle>
    );
};

export default Header;
