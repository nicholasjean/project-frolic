import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Schedule from './components/Schedule.jsx';
import Packages from './components/Packages.jsx';
import Standings from './components/Standings.jsx';
import Scores from './components/Scores.jsx';
import UserRoles from './components/UserRoles.jsx';
import LeagueTeams from './components/LeagueTeams.jsx';
import NotFound from '../NotFound.jsx';

export default class LeagueMain extends TrackerReact(Component) {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: 'Schedule',
      content: <Schedule />,
      subscription: {
          leagues: Meteor.subscribe('userLeagues'),
        },
    };
  }

  _handleClick(filterName, event) {
    var league = this.leagues();
    this.setState({ activeFilter: filterName });
    switch (filterName){
      case 'Schedule':
        this.setState({ content: <Schedule league={league}/> });
        break;
      case 'Packages':
        this.setState({ content: <Packages league={league}/> });
        break;
      case 'Standings':
        this.setState({ content: <Standings league={league}/> });
        break;
      case 'Scores':
        this.setState({ content: <Scores league={league}/> });
        break;
      case 'UserRoles':
        this.setState({ content: <UserRoles league={league}/> });
        break;
      case 'Teams':
        this.setState({ content: <LeagueTeams league={league}/> });
        break;
      default:
        this.setState({ content: <NotFound /> });
    }
  }

  componentDidMount() {
    $(document).ready(function () {
      $('.secondary .menu .item').tab();
    });

  }

  componentWillUnmount() {
    this.state.subscription.leagues.stop();
  }

  leagues() {
    return Leagues.findOne(this.props.data);
  }

  _checkActive(filterName) {
    return (filterName == this.state.activeFilter) ? 'active item' : 'item';
  }

  _checkAdmin() {
    var data = this.leagues();
    if (data.admin == 'Y') {
      return (
        <a className={this._checkActive('UserRoles')}
           onClick={this._handleClick.bind(this, 'UserRoles')}>
          User Roles
        </a>
      );
    }
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui divider"></div>
          <div className="ui secondary menu">
            <a className={this._checkActive('Schedule')}
               onClick={this._handleClick.bind(this, 'Schedule')}>
              Schedule
            </a>
            <a className={this._checkActive('Scores')}
               onClick={this._handleClick.bind(this, 'Scores')}>
              Scores
            </a>
            <a className={this._checkActive('Standings')}
               onClick={this._handleClick.bind(this, 'Standings')}>
              Standings
            </a>
            <a className={this._checkActive('Teams')}
               onClick={this._handleClick.bind(this, 'Teams')}>
              Teams
            </a>
            <a className={this._checkActive('Packages')}
               onClick={this._handleClick.bind(this, 'Packages')}>
              Packages
            </a>
            {this._checkAdmin()}
          </div>
          <div className="ui active tab segment">
            {this.state.content}
          </div>
      </div>
    );
  }
}
