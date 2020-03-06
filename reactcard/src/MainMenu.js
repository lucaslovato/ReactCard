import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import brickLogo from './assets/brick-abode.png'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: "100%",
        marginBottom: "5%",
        flexWrap: "wrap",
    },
    toolbar: {
        backgroundColor: "rgba(2, 37, 58, 0.94)",
        borderBottom: "solid 3px rgb(255, 232, 8)"
    },
    logo: {
        padding: 25,
    }
}));

export default function MainMenu() {
    const classes = useStyles();
    const url = "https://www.brickabode.com/";
    return (
        <div className={classes.root}>
            <AppBar position="static" >
                <Toolbar variant="dense" className={classes.toolbar} >
                    <Typography variant="h6" color="inherit">
                        <a href={url} target="_blank">
                            <img className={classes.logo} src={brickLogo} alt="Brick Abode Logo" />
                        </a>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div >
    );
}