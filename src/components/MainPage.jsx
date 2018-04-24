import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CustomersPane from 'components/CustomersPane';

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <CustomersPane />
  },
  {
    path: '/customers',
    sidebar: () => <div>bubblegum!</div>,
    main: () => <CustomersPane />
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
];

function renderSidebar() {
  return (
    <div
      style={{
        padding: "10px",
        width: "40%",
        background: "#f0f0f0"
      }}
    >
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/customers">Customers</Link>
        </li>
        <li>
          <Link to="/shoelaces">Shoelaces</Link>
        </li>
      </ul>
    </div>
  );
}

const MainPage = () => (
  <Router>
    <div style={{ display: "flex" }}>
      {renderSidebar()}
      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
);

export default MainPage;