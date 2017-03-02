import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import * as MUI from 'material-ui'
import AppTheme from '../../app-theme';
import Navigation from '../Navigation/Navigation'


class App extends Component {

  constructor(){
    super();
    
    this.state = {
      drawerOpen : false
    }
  }

  handleDrawerToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});
  render() {

    // User for resizing center view and header
    //let { drawerOpen } = this.state;
    //const paddingLeftDrawerOpen = 280;

    const styles = {
      header: {
        // User for resizing center view and header
        //paddingLeft: drawerOpen ? paddingLeftDrawerOpen : 20
      },
      container: {
        // User for resizing center view and header
        margin: '20px 20px 20px 15px',
        //paddingLeft: drawerOpen ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={AppTheme}>
        <div className="app">
        <Navigation styles={styles.header} drawerOpen={this.state.drawerOpen} drawerToggle={this.handleDrawerToggle.bind(this)}/>
        <div className="app-childs" style={styles.container}>
          {this.props.children}
        </div>
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
