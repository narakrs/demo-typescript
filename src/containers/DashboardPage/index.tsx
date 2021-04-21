import React from "react";
import { BrowserRouter as Router, Route, Link ,RouteComponentProps} from "react-router-dom";
type TParams = { id: string };
function Dashboard({ match }:RouteComponentProps<TParams>) {
  return <h2>This is a page for Dashboard with ID: {match.params.id} </h2>;
}
export default Dashboard;