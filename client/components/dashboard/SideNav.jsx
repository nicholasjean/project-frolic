import React, {Component} from 'react';

export default class SideNav extends Component {

  _handleClick (e) {
    console.log('hi');
    e.preventDefault();

    if (path && path != '') {
      var params = { user: Meteor.user()._id };
      FlowRouter.go(path, params);
    } else {
      //Meteor.logout( () => FlowRouter.go( '/' ) );
    }
  }

  render () {
    return (
      <div className='ui left vertical inverted labeled icon sidebar overlay visible menu'>
        <a className='active item' onClick={this._handleClick.bind(this)}>
          <i className='home icon'></i>
          Home
        </a>
        <a className='item'>
          <i className='user icon'></i>
          Teams
        </a>
        <a className='item'>
          <i className='users icon'></i>
          Leagues
        </a>
        <a className='item'>
          <i className='cubes icon'></i>
          Packages
        </a>
        <a className='item'>
          <i className='settings icon'></i>
          Settings
        </a>
        <a className='item'>
          <i className='sign out icon'></i>
          Logout
        </a>
      </div>
    );
  }
}
