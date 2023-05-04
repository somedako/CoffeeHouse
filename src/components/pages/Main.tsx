import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Main: React.FC = () => {
    return (
        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    );
};

export default Main;
