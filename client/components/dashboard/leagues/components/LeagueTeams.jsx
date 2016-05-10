import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SingleLeagueTeam from './SingleLeagueTeam.jsx';
import CreateLeagueTeam from './CreateLeagueTeam.jsx';

Teams = new Mongo.Collection('teams');

export default class LeagueTeams extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
          teams: Meteor.subscribe('allTeams'),
        },
    };
  }

  componentWillUnmount() {
    this.state.subscription.teams.stop();
  }

  teams() {
    return Teams.find({
      league:this.props.league.league,
      sport:this.props.league.sport,
    }).fetch();
  }

  _checkForTeams() {
    var data = this.teams();
    if (Object.keys(data).length == 0) {
      return (
        <CreateLeagueTeam league={this.props.league} />
      );
    } else if (Object.keys(data).length == 1) {
      return (
        <SingleLeagueTeam league={this.props.league} />
      );
    } else {
      //Something went wrong...
      return (
        <p>Woops...</p>
      );
      Bert.alert('Woops...', 'danger', 'fixed-top', 'fa-frown-o');
    }
  }

  render() {
    return (
      <div>
        {this._checkForTeams}
      </div>
    );
  }
}
