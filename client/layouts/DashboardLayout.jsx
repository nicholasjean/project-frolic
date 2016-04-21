import React from 'react';

import SideNav from '../components/dashboard/SideNav.jsx';

var style = {
  main: {
    marginLeft: '120px',
    marginTop: '100px',
    width: '85%',
  },
};
export const DashboardLayout = ({ content }) => (
    <div className="dashboard-layout">
        <div className='ui left vertical inverted labeled icon sidebar overlay visible menu'>
          <SideNav />
        </div>
        <div style={style.main} className="pusher">
          <main>{content}</main>
        </div>
    </div>
);
