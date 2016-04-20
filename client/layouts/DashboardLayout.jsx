import React from 'react';

import SideNav from '../components/dashboard/SideNav.jsx';

var style = {
  main: {
    marginLeft: '100px',
  },
};
export const DashboardLayout = ({ content }) => (
    <div className="dashboard-layout">
        <SideNav />
        <div style={style.main} className="pusher">
          <main>{content}</main>
        </div>
    </div>
);
