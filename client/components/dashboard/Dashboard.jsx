import React, {Component} from 'react';

export default class Dashboard extends Component {
  componentDidMount () {
    $(document).ready(function () {
      $('.ui.labeled.icon.sidebar')
      .sidebar({ $context: $('.dashboard-layout') });
    });
  }

  render() {
    return (
      <div>Dashboard</div>
    );
  }
}
