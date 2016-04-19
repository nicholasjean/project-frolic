import React from 'react';

var style = {
  main: {
    marginLeft: '100px',
  },
};
export const DashboardLayout = ({ content }) => (
    <div className="dashboard-layout">
        <div className="ui left vertical inverted labeled icon sidebar overlay visible menu">
          <a className="item">
            <i className="home icon"></i>
            Home
          </a>
          <a className="item">
            <i className="users icon"></i>
            Teams
          </a>
          <a className="item">
            <i className="user icon"></i>
            Leagues
          </a>
          <a className="item">
            <i className="cubes icon"></i>
            Packages
          </a>
          <a className="item">
            <i className="settings icon"></i>
            Settings
          </a>
          <a className="item">
            <i className="sign out icon"></i>
            Logout
          </a>
        </div>
        <div style={style.main} className="pusher">
          <main>{content}</main>
        </div>
    </div>
);
