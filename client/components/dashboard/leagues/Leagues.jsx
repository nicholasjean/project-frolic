import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SingleLeague from './SingleLeague.jsx';

Leagues = new Mongo.Collection('leagues');

export default class LeaguesComponent extends TrackerReact(React.Component) {
  constructor() {
    super();
    this.state = {
      subscription: {
          leagues: Meteor.subscribe('userLeagues'),
        },
    };
  }

  componentWillUnmount() {
    this.state.subscription.leagues.stop();
  }

  leagues() {
    return Leagues.find().fetch();
  }

  componentDidMount () {
    $(document).ready(function () {
      $('.ui.modal').modal();
      $('select.dropdown').dropdown();

      $('.ui.form').form({
          fields: {
            name: {
              identifier: 'name',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please enter a name',
                },
              ],
            },
            sport: {
              identifier: 'sport',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please select a sport',
                },
              ],
            },
          },
          onSuccess: function (e, fields) {
            e.preventDefault();
            console.log(fields);
            Meteor.call('addLeagues', fields.name, fields.sport);

          },
        });
    });
  }

  _checkName(league, name) {
    var ret = true;
    leagues().map((league)=> {
      if (league == name) {
        ret = true;
      } else {
        ret = false;
      }

      return ret;
    });
  }

  render() {
    return (
      <div>
        <div className="ui container">
          <form className="ui form">
            <div className="three fields">
              <div className="field">
                <input type="text" placeholder="League Name" name="name"/>
              </div>
              <div className="field">
                <select className="ui dropdown" name="sport">
                  <option value="">Select Sport</option>
                  <option value="golf">Golf</option>
                </select>
              </div>
              <div className="field">
                <div className="ui positive small submit button">Create League</div>
              </div>
            </div>
            <div className="ui error message"></div>
          </form>
        </div>
        <div className="ui container">
          <div className="ui middle aligned divided list">
            {this.leagues().map((league)=>{
              return <SingleLeague key={league._id} league={league} sport={sport} />
            })}
          </div>
        </div>
    </div>
    );
  }
}
