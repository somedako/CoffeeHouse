import React from 'react';
import Nav from '../Nav/Nav';

const Header: React.FC = () => {
    return (
        <header>
            <div className="container">
                <Nav />
            </div>
        </header>
    );
};

export default Header;
