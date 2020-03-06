import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainCard from "./MainCard";
import MainMenu from "./MainMenu";
import zulipLogo from "./assets/icon.ico.png";
import gitLabLogo from "./assets/GitLab_logo.png";
import curseCI from "./assets/nintendo64.gif";
import jellyfish from "./assets/jellyfish.jpg";
import ciImage from "./assets/ciTheBible.png";
import pgDotnet from "./assets/dotnet.png";


const useStyles = makeStyles({
  mainDiv: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <React.Fragment>
        <MainMenu />
        <MainCard
          url="https://chat.brickabode.com/#"
          logo={zulipLogo}
          mainText="Zulip"
          secondaryText="Go to Brick Abode Zulip"
          nameClass={"media"}
        />
        <MainCard
          url="https://git.brickabode.com/"
          logo={gitLabLogo}
          mainText="GitLab"
          secondaryText="Go to Brick Abode GitLab"
          nameClass={"gitLab"}
        />
        <MainCard
          url="https://chat.brickabode.com/#narrow/pm-with/35-david"
          logo={curseCI}
          mainText="Curse CI"
          secondaryText="If you want to curse CI talk to David"
          nameClass={"media"}
        />
        <MainCard
          url="https://chat.brickabode.com/#narrow/pm-with/35-david"
          logo={ciImage}
          mainText="CI Task Juggler"
          secondaryText="To check CI TJ"
          nameClass={"media"}
        />
        <MainCard
          url="https://chat.brickabode.com/#narrow/pm-with/35-david"
          logo={jellyfish}
          mainText="Jellyfish Task Juggler"
          secondaryText="To check Jellyfish TJ"
          nameClass={"media"}
        />
        <MainCard
          url="https://chat.brickabode.com/#narrow/pm-with/35-david"
          logo={pgDotnet}
          mainText="PgDotnet Task Juggler"
          secondaryText="To check PgDotnet TJ"
          nameClass={"media"}
        />
      </React.Fragment>
    </div>
  );
}