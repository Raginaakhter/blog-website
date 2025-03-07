import React from 'react';
import Navber from '../components/Navber';
import Mainfooter from '../components/Mainfooter';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Mainfooter/>
        </div>
    );
};

export default Mainlayout;