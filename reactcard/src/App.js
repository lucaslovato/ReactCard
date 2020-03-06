import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TabMenu from "./TabMenu";
import ReactEaster from './ReactEaster';

const useStyles = makeStyles({
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <React.Fragment>
        <TabMenu />
        <ReactEaster />
      </React.Fragment>
    </div>
  );
}