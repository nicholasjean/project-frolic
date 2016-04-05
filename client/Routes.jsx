import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing.jsx';
import Login from './components/user/Login.jsx';
import Register from './components/user/Register.jsx';

FlowRouter.route('/', {
    action() {
        mount(MainLayout, {
            content: (<Home />)
        })
    }
});

FlowRouter.route('/pricing', {
    action() {
        mount(MainLayout, {
            content: (<Pricing />)
        })
    }
});
FlowRouter.route('/login', {
    action() {
        mount(MainLayout, {
            content: (<Login />)
        })
    }
});
FlowRouter.route('/sign_up', {
    action() {
        mount(MainLayout, {
            content: (<Register />)
        })
    }
});
