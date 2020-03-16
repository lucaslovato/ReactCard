import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MainCard from "./MainCard";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import zulipLogo from "./assets/icon.ico.png";
import gitLabLogo from "./assets/GitLab_logo.png";
import curseCI from "./assets/nintendo64.gif";
import superMario from "./assets/superMario.gif"
import omg from "./assets/omg.gif";
import jellyfish from "./assets/jellyfish.jpg";
import ciImage from "./assets/ciTheBible.png";
import pgDotnet from "./assets/dotnet.png";
import brickLogo from './assets/brick-abode.png'
import ReactEaster from './ReactEaster';
import app from "./base";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

export const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        marginBottom: "5%",
        flexWrap: "wrap",
    },
    toolbar: {
        backgroundColor: "rgba(2, 37, 58, 0.94)",
    },
    logo: {
        padding: 25,
    },
    mainDiv: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    toolbarDiv: {
        display: "flex"
    },
}));

export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const brickAbodeUrl = "https://www.brickabode.com/";

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.toolbar}>
                <div className={classes.toolbarDiv}>
                    <a href={brickAbodeUrl} target="_blank" rel="noopener noreferrer">
                        <img className={classes.logo} src={brickLogo} alt="Brick Abode Logo" />
                    </a>
                    <IconButton color="secondary" aria-label="delete" className={classes.margin} onClick={() => app.auth().signOut()}>
                        <ExitToAppIcon fontSize="inherit" />
                    </IconButton>
                </div>
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Main Pages" href="/main" {...a11yProps(0)} />
                    <LinkTab label="Task Juggler" href="/tj" {...a11yProps(1)} />
                    <LinkTab label="Docs" href="/docs" {...a11yProps(2)} />
                    <LinkTab label="YouTube" href="/youtube" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div className={classes.mainDiv}>
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
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className={classes.mainDiv}>
                    <MainCard
                        url="http://internal.brickabode.com/ci/tj/"
                        logo={ciImage}
                        mainText="CI Task Juggler"
                        secondaryText="To check CI TJ"
                        nameClass={"media"}
                    />
                    <MainCard
                        url="https://internal.brickabode.com/jellyfish/reports/"
                        logo={jellyfish}
                        mainText="Jellyfish Task Juggler"
                        secondaryText="To check Jellyfish TJ"
                        nameClass={"media"}
                    />
                    <MainCard
                        url="http://internal.brickabode.com/dotnetpg/tj/"
                        logo={pgDotnet}
                        mainText="PgDotnet Task Juggler"
                        secondaryText="To check PgDotnet TJ"
                        nameClass={"media"}
                    />
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div className={classes.mainDiv}>
                    <MainCard
                        url="https://www.youtube.com/watch?v=KCiVG6mTor0"
                        logo={superMario}
                        mainText="Documentation"
                        secondaryText="We don't have useful links for docs yet :("
                        nameClass={"media"}
                    />
                </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <div className={classes.mainDiv}>
                    <MainCard
                        url="https://chat.brickabode.com/#narrow/pm-with/35-david"
                        logo={omg}
                        mainText="News Letter"
                        secondaryText="Did you already check this week news letter?"
                        nameClass={"media"}
                    />
                </div>
            </TabPanel>
            <ReactEaster />
        </div >
    );
}
