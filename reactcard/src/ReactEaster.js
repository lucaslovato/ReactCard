import React from 'react';
import EasterEgg from 'react-easter';
import curseCI from "./assets/nintendo64.gif";
import superMario from "./assets/superMario.gif"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        minHeight: 400
    },
}));


export default function ReactEaster() {
    const classes = useStyles();

    const konamiCode = [
        'arrowup',
        'arrowup',
        'arrowdown',
        'arrowdown',
        'arrowleft',
        'arrowright',
        'arrowleft',
        'arrowright',
        'b',
        'a',
        'enter'
    ];
    return (
        <EasterEgg keys={konamiCode}
            timeout={5000}>
            <div className={classes.root}>
                <iframe class="playing-mario"
                    src={curseCI}
                    frameborder="0"
                    allowfullscreen
                />
                I HATE CI
                <br />
                I HATE CI
                <br />
                I HATE CI
                <br />
                I HATE CI
                <br />
                I HATE CI
                <br />
                I HATE CI
                <br />
                I HATE CI
                <br />
                I HATE CI
                <br />
                I HATE CI
                <br />
                I HATE CI
                <br />
                I HATE CI
            </div>
        </EasterEgg>
    );
}