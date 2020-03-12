import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TabMenu from "./TabMenu";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Login from './Login';
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Auth";

const useStyles = makeStyles({
});

export default function App() {
  const classes = useStyles();

  return (
    <AuthProvider>
      <Router>
        <div className={classes.mainDiv}>
          <PrivateRoute exact path="/" component={TabMenu} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </AuthProvider>
  );
}