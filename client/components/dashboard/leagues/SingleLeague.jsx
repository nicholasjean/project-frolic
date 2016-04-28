import React, {Component} from 'react';

//import LeagueMain from './LeagueMain.jsx';

export default class SingleLeague extends Component {
  componentDidMount() {

  }

  _imageSrc() {
    var path = 'img/avatar_placeholder_small.png';
    switch (this.props.sport) {
      case 'Golf':
        path = './img/avatar_placeholder_small.png';
        break;
      default:
        path = './img/avatar_placeholder_small.png';
    }
    return path;
  }

  _handleClick(e) {
    e.preventDefault();
    var params = { key: this.props.key, league: this.props.league };
    FlowRouter.go('leagueMainRoute', params);
  }

  render() {
    return (
        <div className="item">
          <div className="right floated content">
            <div className="ui button" onClick={this._handleClick.bind(this)}>View</div>
          </div>
          <img className="ui avatar image" src={this._imageSrc} />
          <div className="content">
            {this.props.league}
          </div>
        </div>
    );
  }
}
