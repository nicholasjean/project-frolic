import React from 'react';

import Header from '../components/header/Header.jsx';

export const MainLayout = ({content}) => (
    <div className="main-layout">
        <Header />
        <main>{content}</main>
    </div>
)
