import React from 'react';
import Button from 'material-ui/Button';
import { Helmet } from 'react-helmet';

import { signOut } from 'util/Api';
import EnhancedTable from 'components/EnhancedTable';

export default class MainPage extends React.Component {

  signOut = () => {
    signOut();
  };

  render() {
    return (
      <div style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Helmet>
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