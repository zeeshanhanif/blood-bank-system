import React, { Component } from 'react';
import * as MUI from 'material-ui'
import styles from './DonorDetailStyles';
import Person from 'material-ui/svg-icons/social/person';



class DonorDetail extends Component {
  //user-default
  render() {
    
    return (
      <div style={styles.donerDetailContainer}>
        <MUI.Card>
          <MUI.CardHeader
            title="Zeeshan Hanif"
            subtitle="AB+"
            avatar={<MUI.Avatar icon={<Person />}/>}
          />
          <MUI.CardText >
            <div>Contatct No. : 0333-1234567</div>
            <div>Age : 45</div>
            <div>Date Of Birth : 13 Sep 2017</div>
            <div>Address : Jamshed Road</div>
          </MUI.CardText>
        </MUI.Card>
      </div>
    );
  }
}

export default DonorDetail
