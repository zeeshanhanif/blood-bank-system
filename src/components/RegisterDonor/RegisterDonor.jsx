import React, { Component } from 'react';
import styles from './RegisterDonorStyles';
import * as MUI from 'material-ui'
import {Link} from 'react-router';
import data from '../../data.json';


class RegisterDonor extends Component {

  constructor(){
    super();
    this.state = {
      bloodGroupValue: "",
    };
  }

  handleChange = (event, index, value) => this.setState({bloodGroupValue:value});

  render() {
    return (
      <div style={styles.registerDonorContainer}>
        <MUI.Paper style={styles.paper}>
          <h3 style={styles.title}>Donar Registration</h3>
          <MUI.Divider/>
          <form>

          <MUI.TextField
            hintText="Full Name"
            floatingLabelText="Full Name"
            fullWidth={true}
          />
          <MUI.TextField
            hintText="Address"
            floatingLabelText="Address"
            fullWidth={true}
          />
          <MUI.TextField
            hintText="Contact No."
            floatingLabelText="Contact No."
            fullWidth={true}
          />
          <MUI.SelectField
            floatingLabelText="Blood Group"
            value={this.state.bloodGroupValue}
            fullWidth={true}
            autoWidth={true}
            onChange={this.handleChange.bind(this)}
            >
            {
              data.bloodgroups.map(bloodgroup=>{
                return <MUI.MenuItem key={bloodgroup} value={bloodgroup} primaryText={bloodgroup}/>
              })
            }
          </MUI.SelectField>

          <MUI.DatePicker
            hintText="Date of Birth"
            floatingLabelText="Date of Birth"
            fullWidth={true}/>

          
          <div style={styles.buttons}>
            <Link to="/">
              <MUI.RaisedButton label="Cancel"/>
            </Link>

            <MUI.RaisedButton label="Save"
                          style={styles.saveButton}
                          type="submit"
                          primary={true}/>
          </div>
        </form>

          <div style={styles.clear}/>
        </MUI.Paper>
      </div>
    );
  }
}

export default RegisterDonor;
