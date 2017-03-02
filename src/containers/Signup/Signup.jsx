import React, { Component,PropTypes } from 'react';
import './Signup.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as MUI from 'material-ui'
import AppTheme from '../../app-theme';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { AuthMiddleware } from '../../store'

function mapStateToProps(state) {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        signup: (credentials) => dispatch(AuthMiddleware.singup(credentials))
    };
}

class Signup extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  constructor(){
    super();
    this.handelSignup = this.handelSignup.bind(this);
  }
  handelSignup() {
    this.props.signup({"name":"zeeshan"})
    console.log("Hello world");
  }
  
  render() {
    if(this.props.isAuthenticated){
      console.log("Authenticated true in signup");
      setTimeout(()=> {
        this.context.router.push("/dashboard");
      },0);
      return null;
    }
    else {
      console.log("Authenticated FALSE in signup");    
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
                  
                  <MUI.RaisedButton label="Signup"
                                primary={true}
                                className="signup-loginBtn"
                                onTouchTap={this.handelSignup}/>
                  
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
}

//export default Signup;
export default connect(mapStateToProps,mapDispatchToProps)(Signup)
