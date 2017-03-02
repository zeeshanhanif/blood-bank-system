import React, { Component,PropTypes } from 'react';
import * as MUI from 'material-ui'
import styles from './DonorListStyles';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Person from 'material-ui/svg-icons/social/person';

class DonorList extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  
  handleDrawerToggle = () => this.context.router.push("/dashboard/donorlist/1");

  render() {
    
    return (
      <div style={styles.donerListContainer}>
          <MUI.List>
            <MUI.Subheader style={styles.subHeader} inset={false}>Donor List</MUI.Subheader>
            <MUI.ListItem
              leftAvatar={<MUI.Avatar icon={<Person />} />}
              rightIcon={<ActionInfo />}
              primaryText="Zeeshan Hanif"
              secondaryText="Blood Group: AB+"
              onTouchTap={this.handleDrawerToggle.bind(this)}
            />
            <MUI.Divider />
            <MUI.ListItem
              leftAvatar={<MUI.Avatar icon={<Person />} />}
              rightIcon={<ActionInfo />}
              primaryText="Inam ul Haq"
              secondaryText="Blood Group: B+"
            />
            <MUI.Divider />
            <MUI.ListItem
              leftAvatar={<MUI.Avatar icon={<Person />} />}
              rightIcon={<ActionInfo />}
              primaryText="Rehan uddin"
              secondaryText="Blood Group: A-"
            />
          </MUI.List>
        </div>
    );
  }
}

export default DonorList
