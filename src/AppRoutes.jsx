import React from 'react';
import { Route } from 'react-router';
import LoginPage from 'components/LoginPage';
import MainPage from 'components/MainPage';
import CustomersPane from 'components/CustomersPane';
import { connect } from 'react-redux';
import CssBaseline from 'material-ui/CssBaseline';

function mapStateToProps(state, props) {
  return {
    authedUser: state.authedUser,
  };
}

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > App
 */
class AppRoutes extends React.Component {
  render() {
    const { authedUser } = this.props;
    const isAuthed = authedUser.hasOwnProperty('uid');
    // const isMobile = state.browser.is.extraSmall;

    return (
      <div style={{ height: "100%", width: "100%", position: "fixed" }}>
        <CssBaseline />
        <Route exact path="/" component={isAuthed ? CustomersPane : LoginPage} />
        {/*<Route path="/admin" component={AdminPage}/>*/}
      </div>
    );
  }
}

export default connect(mapStateToProps)(AppRoutes);