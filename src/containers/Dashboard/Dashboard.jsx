import React, { Component } from 'react';
import './Dashboard.css';
//import * as MUI from 'material-ui'
//import {Link} from 'react-router';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">       
        {this.props.children}
      </div>
    );
  }
}

export default Dashboard;
