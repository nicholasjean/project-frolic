import React, {Component} from 'react';

export default class SingleLeague extends Component {
  componentDidMount() {

  }

  _imageSrc() {
    var path = 'img/avatar_placeholder_small.png';
    switch (this.props.sport) {
      case 'Golf':
        path = 'img/avatar_placeholder_small.png';
        break;
      default:
        path = 'img/avatar_placeholder_small.png';
    }
    return path;
  }

  render() {
    return (
        <div className="item">
          <div className="right floated content">
            <div className="ui button">View</div>
          </div>
          <img className="ui avatar image" src={this._imageSrc} />
          <div className="content">
            {this.props.league}
          </div>
        </div>
    );
  }
}
