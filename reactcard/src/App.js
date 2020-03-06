import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TabMenu from "./TabMenu";


const useStyles = makeStyles({
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <React.Fragment>
        <TabMenu />
      </React.Fragment>
    </div>
  );
}