import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from 'material-ui/Button';
import grey from 'material-ui/colors/grey';

import { signOut, fetchCustomers, fetchGarage } from 'util/Api';
import EnhancedTable from 'components/table/EnhancedTable';
import store from '../store';


function mapStateToProps(state, props) {
  return {
    garageId: state.authedUser.uid,
    customers: Object.values(state.customers),
  };
}

class MainPage extends React.Component {

  signOut = () => {
    signOut();
  };

  componentDidMount() {
    const { garageId } = this.props;
    fetchGarage(garageId)
    .then(garage => {
      store.dispatch({ type: "ADD_GARAGE_SUCCESS", garage });
    })
    .catch(error => {
      console.log(error);
    });
    fetchCustomers(garageId);
  }

  render() {
    const { customers } = this.props;

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
        <EnhancedTable customers={customers}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(MainPage);