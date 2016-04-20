import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Dashboard extends Component {
  componentDidMount () {
    $(document).ready(function () {
      var rootNode = ReactDOM.findDOMNode(this);
      $(rootNode).find('.ui.sidebar').sidebar({ $context: $(rootNode) });

      //$('.ui.labeled.icon.sidebar')
      //.sidebar({ $context: $('.dashboard-layout') });

    });
  }

  render() {
    return (
      <div>Dashboard</div>
    );
  }
}
