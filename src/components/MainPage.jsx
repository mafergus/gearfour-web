import React from 'react';
import Button from 'material-ui/Button';
import grey from 'material-ui/colors/grey';

import { signOut } from 'util/Api';
import EnhancedTable from 'components/table/EnhancedTable';

export default class MainPage extends React.Component {

  signOut = () => {
    signOut();
  };

  render() {
    return (
      <div style={{ height: "100%", width: "100%", backgroundColor: grey[100], display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button
          variant="raised"
          label="Sign Out"
          onClick={this.signOut}
          style={{ position: "fixed", right: 5, top: 5, color: "black", backgroundColor: "white" }}
        >
          Sign Out
        </Button>
        <EnhancedTable />
      </div>
    );
  }
}