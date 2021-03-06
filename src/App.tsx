import React from "react";
import { BrowserRouter as Router, Route, Link ,RouteComponentProps} from "react-router-dom";
import Index from "./containers/LoginPage/index";
import Product from './containers/DashboardPage/index';

function AppRouter() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products/1">First Product</Link>
            </li>
            <li>
              <Link to="/products/2">Second Product</Link>
            </li>
          </ul>
        </nav> */}

        <Route path="/" exact component={Index} />
        <Route path="/products/:id" component={Product} />
      </div>
    </Router>
  );
}

export default AppRouter;