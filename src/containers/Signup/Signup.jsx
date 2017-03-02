import React, { Component } from 'react';
import './Signup.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as MUI from 'material-ui'
import AppTheme from '../../app-theme';
import {Link} from 'react-router';

class Singup extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={AppTheme}>          
      <div>
        <div className="signup-loginContainer">
          <MUI.Paper className="signup-paper">
            <form>
              <MUI.TextField
                  hintText="Full Name"
                  floatingLabelText="Full Name"
                  fullWidth={true}
                />
              <MUI.TextField
                hintText="E-mail"
                floatingLabelText="E-mail"
                fullWidth={true}
              />
              <MUI.TextField
                hintText="Password"
                floatingLabelText="Password"
                fullWidth={true}
                type="password"
              />

              <div>
                <Link to="/">
                
                  <MUI.RaisedButton label="Signup"
                                primary={true}
                                className="signup-loginBtn"/>
                </Link>
              </div>
            </form>
          </MUI.Paper>  
          <div className="signup-buttonsDiv">
          <Link to="/login">
              <MUI.FlatButton
                label="Login"
                className="signup-flatButton"
              />
            </Link>
          </div>       
          
        </div>
      </div>
      </MuiThemeProvider>  
      
    );
  }
}

export default Singup;
