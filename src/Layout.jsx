import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className='flex flex-col bg-gradient-to-b from-re  w-screen h-screen overflow-x-hidden overflow-y-auto'>
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout;
