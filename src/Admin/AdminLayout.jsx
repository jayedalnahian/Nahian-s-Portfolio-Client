import React from 'react';
import MyProjects from './Projects/MyProjects';
import { Outlet } from 'react-router';

const AdminLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AdminLayout;