import React, {Component} from 'react';

export default class LeagueMain extends Component {
  componentDidMount() {
    console.log('Mounted');
  }

  render() {
    return (
      <div>
        <div>League</div>
        <div>{this.props.key}</div>
        <div>{this.props.league}</div>
      </div>
    );
  }
}
