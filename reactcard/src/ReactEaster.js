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

    const konamiCode1 = [
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
    const konamiCode2 = [
        'arrowup',
        'arrowdown',
        'arrowup',
        'arrowdown',
        'arrowleft',
        'arrowright',
        'x',
        'y',
        'enter'
    ];
    return (
        <div>
            <EasterEgg keys={konamiCode1}
                timeout={5000}>
                <div className={classes.root}>
                    <iframe title="first" class="playing-mario"
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
            <EasterEgg keys={konamiCode2}
                timeout={5000}>
                <div className={classes.root}>
                    <iframe title="second" class="playing-mario"
                        src={superMario}
                        frameborder="0"
                        allowfullscreen
                    />
                    I LOVE CI
            <br />
                    I LOVE CI
            <br />
                    I LOVE CI
            <br />
                    I LOVE CI
            <br />
                    I LOVE CI
            <br />
                    I LOVE CI
            <br />
                    I LOVE CI
            <br />
                    I LOVE CI
            <br />
                    I LOVE CI
            <br />
                    I LOVE CI
            <br />
                    I LOVE CI
        </div>
            </EasterEgg>
        </div>
    );
}