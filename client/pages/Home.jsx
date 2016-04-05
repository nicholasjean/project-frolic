import React, {Component} from 'react';

export default class Home extends Component {

    render() {
        return (
          <div className="pusher">
            <div className="ui inverted vertical masthead center aligned segment">
              <div className="ui text container">
                <h1 className="ui inverted header">
                  Project Frolic
                </h1>
                <h2>Manage your leagues or teams with ease.</h2>
                <a className="ui huge primary button" href="/sign_up">Get Started <i className="right arrow icon"></i></a>
              </div>

            </div>
          </div>
        )
    }
}
