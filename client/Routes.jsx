import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import {DashboardLayout} from './layouts/DashboardLayout.jsx';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing.jsx';
import Login from './components/user/Login.jsx';
import Register from './components/user/Register.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import DashboardLeagues from './components/dashboard/leagues/Leagues.jsx';
import DashboardTeams from './components/dashboard/Teams.jsx';
import DashboardPackages from './components/dashboard/PackagesMain.jsx';
import DashboardSettings from './components/dashboard/Settings.jsx';
import LeagueMain from './components/dashboard/leagues/LeagueMain.jsx';

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
  name: 'dashboardRoute',
  action(params) {
      mount(DashboardLayout, {
        content: (<Dashboard />),
      });
    },
});
FlowRouter.route('/dashboard/leagues/:user', {
  name: 'dashboardLeaguesRoute',
  action(params) {
      mount(DashboardLayout, {
        content: (<DashboardLeagues />),
      });
    },
});
FlowRouter.route('/dashboard/league/:key', {
  name: 'leagueMainRoute',
  action(params) {
      mount(DashboardLayout, {
        content: (<LeagueMain data={params.key} />),
      });
    },
});
FlowRouter.route('/dashboard/teams/:user', {
  name: 'dashboardTeamsRoute',
  action(params) {
      mount(DashboardLayout, {
        content: (<DashboardTeams />),
      });
    },
});
FlowRouter.route('/dashboard/packages/:user', {
  name: 'dashboardPackagesRoute',
  action(params) {
      mount(DashboardLayout, {
        content: (<DashboardPackages />),
      });
    },
});
FlowRouter.route('/dashboard/settings/:user', {
  name: 'dashboarhSettingsRoute',
  action(params) {
      mount(DashboardLayout, {
        content: (<DashboardSettings />),
      });
    },
});
