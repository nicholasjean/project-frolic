import React, {Component} from 'react';

export default class Login extends Component {
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
          },
          onSuccess: function (e, fields) {
            e.preventDefault();

            //Meteor.call('loginWithPassword', fields.email, fields.password);
            Meteor.loginWithPassword(fields.email, fields.password, function (error) {
              if (error) {
                console.log('there was an error: ' + error.reason);
                Bert.alert('Something went wrong...', 'danger', 'fixed-top', 'fa-frown-o');
              } else {
                var params = { user: Meteor.user()._id };
                FlowRouter.go("dashboardRoute", params);
              }
            });
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
              Login
            </div>
          </h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" id="email" name="email" placeholder="E-mail address" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input type="password" id="password" name="password" placeholder="Password" />
                </div>
              </div>
              <div className="ui fluid large primary submit button">Login</div>
            </div>

            <div className="ui error message"></div>

          </form>

          <div className="ui message">
            New to us? <a href="/sign_up">Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
}
