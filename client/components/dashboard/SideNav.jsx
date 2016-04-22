import React, {Component} from 'react';

export default class SideNav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeFilter: 'Home',
    };
  }

  _handleClick (filterName, path, e) {
    this.setState({ activeFilter: filterName });

    e.preventDefault();

    if (path && path != '') {
      var params = { user: Meteor.user().emails[0].address };
      FlowRouter.go(path, params);
    } else {
      Meteor.logout(() => FlowRouter.go('/'));
    }
  }

  _checkActive(filterName) {
    return (filterName == this.state.activeFilter) ? 'active item' : 'item';
  }

  render () {
    return (
      <div>
        <a className={this._checkActive('Home')}
          onClick={this._handleClick.bind(this, 'Home', 'dashboardRoute')}>
          <i className='home icon'></i>
          Home
        </a>
        <a className={this._checkActive('Teams')}
          onClick={this._handleClick.bind(this, 'Home', 'dashboardTeamsRoute')}>
          <i className='user icon'></i>
          Teams
        </a>
        <a className={this._checkActive('Leagues')}
          onClick={this._handleClick.bind(this, 'Home', 'dashboardLeaguesRoute')}>
          <i className='users icon'></i>
          Leagues
        </a>
        <a className={this._checkActive('Packages')}
          onClick={this._handleClick.bind(this, 'Home', 'dashboardPackagesRoute')}>
          <i className='cubes icon'></i>
          Packages
        </a>
        <a className={this._checkActive('Settings')}
          onClick={this._handleClick.bind(this, 'Home', 'dashboarhSettingsRoute')}>
          <i className='settings icon'></i>
          Settings
        </a>
        <a className={this._checkActive('Logout')}
          onClick={this._handleClick.bind(this, 'Home', '')}>
          <i className='sign out icon'></i>
          Logout
        </a>
      </div>
    );
  }
}
