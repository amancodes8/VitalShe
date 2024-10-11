import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className='flex flex-col w-screen bg-pink-500 h-screen overflow-x-hidden overflow-y-auto layout'>
            <Header />
            <Outlet />
        </div>
    );
}

export default Layout;
