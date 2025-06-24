import React from 'react';
import { Outlet } from 'react-router';
import Nav from '../com/Nav';
import Footer from '../com/Footer';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;