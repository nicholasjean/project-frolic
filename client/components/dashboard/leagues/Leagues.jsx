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

  _checkName(name) {
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
                  prompt: 'Please enter a league name',
                },
                {
                  type: 'minLength[3]',
                  prompt: 'League name must be at least {ruleValue} characters',
                },
                {
                  type: 'maxLength[24]',
                  prompt: 'League name must be less than {ruleValue} characters',
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
          var check = false;
          Leagues.find().fetch().map((league)=> {
            if (league == fields.name && check == false) {
              Bert.alert(fields.name + ' already exist.', 'danger', 'fixed-top', 'fa-frown-o');
              check = true;
            } else if (check == false) {
              Meteor.call('addLeagues', fields.name, fields.sport);
              check = true;
            }
          });

          //Meteor.call('addLeagues', fields.name, fields.sport);
        },
      });
    });
  }

  // _handleSuccess(fields, e) {
  //   console.log(fields);
  //   leagues().map((league)=> {
  //     if (league == fields.name) {
  //       Bert.alert(fields.name + ' already exist.', 'danger', 'fixed-top', 'fa-frown-o');
  //     } else {
  //       Meteor.call('addLeagues', fields.name, fields.sport);
  //     }
  //   });
  // }

  render() {
    var style = {
      padding: {
        paddingTop: '50px',
      },
    };
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
              <div className="ui positive small submit button">Create League</div>
            </div>
            <div className="ui error message"></div>
          </form>
        </div>
        <div className="ui container" style={style.padding}>
          <div className="ui middle aligned divided list">
            {this.leagues().map((league)=> {
              return <SingleLeague key={league._id} league={league.league} sport={league.sport} />;
            })}
          </div>
        </div>
    </div>
    );
  }
}
