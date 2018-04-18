import React from 'react';
import ReactDOM from 'react-dom';
import 'es5-shim';
import 'es6-shim';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import 'typeface-roboto';

import AppRoutes from './AppRoutes';

// ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
// registerServiceWorker();

// Create a history of your choosing (we're using a browser history in this case)


// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <MuiThemeProvider>
      <ConnectedRouter history={history}>
        <AppRoutes />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
