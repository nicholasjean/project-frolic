import React, {Component} from 'react';

export default class Register extends Component {
  componentDidMount() {
    $(document).ready(function () {
      $('.ui.form').form({
          fields: {
            email: {
              identifier: 'email',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please enter your e-mail',
                },
                {
                  type: 'email',
                  prompt: 'Please enter a valid e-mail',
                },
              ],
            },
            password: {
              identifier: 'password',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please enter your password',
                },
                {
                  type: 'length[8]',
                  prompt: 'Your password must be at least 8 characters',
                },
              ],
            },
            verifyPassword: {
              identifier: 'verifyPassword',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please re-enter your password',
                },
                {
                  type: 'match[password]',
                  prompt: 'Passwords must match',
                },
              ],
            },
          },
          onSuccess: function (e, fields) {
            e.preventDefault();

            Accounts.createUser(
            {
              email: fields.email,
              password: fields.password,
            },
            function (error) {
              if (error) {
                console.log('there was an error: ' + error.reason);
                Bert.alert('Something went wrong...', 'danger', 'fixed-top', 'fa-frown-o');
              } else {
                console.log(Meteor.user());
                var params = { user: Meteor.user()._id };
                FlowRouter.go("dashboardRoute", params);
              };
            }
          );
          },
        });
    });
  }

  render() {
    var style = {
      column: {
        maxWidth: '450px',
      },
    };
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column" style={style.column}>
          <h2 className="ui image header">
            <img src="" className="image" />
            <div className="content">
              Sign up
            </div>
          </h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="email" placeholder="E-mail address" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" name="password" placeholder="Password" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    type="password"
                    id="verifyPassword"
                    name="verifyPassword"
                    placeholder="Verify Password" />
                </div>
              </div>
              <div
                  className="ui fluid large primary submit button">Sign Up
              </div>
            </div>

            <div className="ui error message"></div>

          </form>

          <div className="ui message">
            Already have an account? <a href="/login">Login</a>
          </div>
        </div>
      </div>
    );
  }
}
