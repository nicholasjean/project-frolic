//header for mainlayout
import React, {Component} from 'react';

import AuthenticatedNavigation from './AuthenticatedNavigation.jsx';
import PublicNavigation from './PublicNavigation.jsx';

export default class Header extends Component {
  navigationItems() {
      if ( !Meteor.loggingIn() && Meteor.user() ) {
        return <AuthenticatedNavigation />;
      } else {
        return <PublicNavigation />;
      }
  }
  render() {
    return (
        <div>
          {this.navigationItems()}
        </div>
    )
  }
}
