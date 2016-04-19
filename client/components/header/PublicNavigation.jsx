//This is the header that shows when a user is not logged in for mainlayout
import React, {Component} from 'react';

export default class PublicNavigation extends Component {
  render() {
    return (

      <div className="ui stackable menu">
        <a className="item" href="/">
          <img src="" /> Frolic
        </a>
        <div className="right menu">
          <a className="item" href="/pricing">
            Pricing
          </a>
          <div className="item">
            <a className="ui primary button" href="/login">Login</a>
          </div>
          <div className="item">
            <a className="ui primary button" href="/sign_up">Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
}
