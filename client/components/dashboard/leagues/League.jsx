import React, {Component} from 'react';

export default class League extends Component {
  componentDidMount() {

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
