import React, { useContext, useEffect, lazy } from 'react';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Main from './Main';
import { SidebarContext } from '../context/SidebarContext';

// const Page404 = lazy(() => import('../pages/404'));

function Layout({ children }: { children: any }) {
    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
    // let location = useLocation();

    // useEffect(() => {
    //     closeSidebar();
    // }, [location]);

    return (
        <div
            className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
                isSidebarOpen && 'overflow-hidden'
            }`}
        >
            <Sidebar />

            <div className="flex flex-col flex-1 w-full">
                <Header />
                <Main>{children}</Main>
            </div>
        </div>
    );
}

export default Layout;
