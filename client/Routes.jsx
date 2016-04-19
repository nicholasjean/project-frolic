import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import {DashboardLayout} from './layouts/DashboardLayout.jsx';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing.jsx';
import Login from './components/user/Login.jsx';
import Register from './components/user/Register.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import DashboardLeagues from './components/dashboard/Leagues.jsx';
import DashboardTeams from './components/dashboard/Teams.jsx';
import DashboardPackages from './components/dashboard/Packages.jsx';
import DashboardSettings from './components/dashboard/Settings.jsx';

FlowRouter.route('/', {
  action() {
      mount(MainLayout, {
        content: (<Home />),
      });
    },
});

FlowRouter.route('/pricing', {
  action() {
      mount(MainLayout, {
        content: (<Pricing />),
      });
    },
});
FlowRouter.route('/login', {
  action() {
      mount(MainLayout, {
        content: (<Login />),
      });
    },
});
FlowRouter.route('/sign_up', {
  action() {
      mount(MainLayout, {
        content: (<Register />),
      });
    },
});
FlowRouter.route('/dashboard/:user', {
  action(params) {
      mount(DashboardLayout, {
        content: (<Dashboard />),
      });
    },
});
FlowRouter.route('/dashboard/leagues/:user', {
  action(params) {
      mount(DashboardLayout, {
        content: (<DashboardLeagues />),
      });
    },
});
FlowRouter.route('/dashboard/teams/:user', {
  action(params) {
      mount(DashboardLayout, {
        content: (<DashboardTeams />),
      });
    },
});
FlowRouter.route('/dashboard/packages/:user', {
  action(params) {
      mount(DashboardLayout, {
        content: (<DashboardPackages />),
      });
    },
});
FlowRouter.route('/dashboard/settings/:user', {
  action(params) {
      mount(DashboardLayout, {
        content: (<DashboardSettings />),
      });
    },
});
