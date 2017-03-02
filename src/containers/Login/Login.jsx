import React, { Component } from 'react';
//import styles from './Login-css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as MUI from 'material-ui'
import AppTheme from '../../app-theme';
import {Link} from 'react-router';
import Help from 'material-ui/svg-icons/action/help';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import './Login.css';
import {grey500} from 'material-ui/styles/colors';
//<MUI.RaisedButton primary={true} label="Hello Login"/>
class Login extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={AppTheme}>          
      <div>
        <div className="long-loginContainer">
          <MUI.Paper className="long-paper">
            <form>
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
                <MUI.Checkbox
                  label="Remember me"
                  className="long-checkRemember"
                  labelStyle={{color: grey500}}
                  iconStyle={{color: grey500,borderColor: grey500, fill: grey500}}
                />

                <Link to="/dashboard">
                
                  <MUI.RaisedButton label="Login"
                                primary={true}
                                className="long-loginBtn"/>
                </Link>
              </div>
            </form>
          </MUI.Paper>

          <div className="long-buttonsDiv">
          <Link to="/signup">
              <MUI.FlatButton
                label="Register"                
                className="long-flatButton"
                icon={<PersonAdd />}
              />
            </Link>
            <MUI.FlatButton
              label="Forgot Password?"
              className="long-flatButton"
              icon={<Help />}
            />
          </div>

          
        </div>
      </div>
      </MuiThemeProvider>      
    );
  }
}

export default Login;
