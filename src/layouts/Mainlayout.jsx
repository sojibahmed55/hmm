import React from 'react';
import { Outlet } from 'react-router';
import Header from '../pages/Header';

const Mainlayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Mainlayout;