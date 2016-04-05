//This is the header that shows when a user is logged in for mainlayout
import React, {Component} from 'react';

export default class AuthenticatedNavigation extends Component {
  currentUserEmail() {
    return Meteor.user().emails[0].address;
  }
  render() {
    return (
      <div></div>
    )
  }
}
