import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import * as firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    mainDiv: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
    },
});

const Login = ({ history }) => {
    const classes = useStyles();

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const Auth = useContext(AuthContext);

    const checkIfIsABAEmail = (email) => {
        return email.split('@')[1] === "brickabode.com";
    }

    const handleGLogin = useCallback(
        async event => {
            const provider = new firebase.auth.GoogleAuthProvider();
            try {
                await app
                    .auth()
                    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
                    .then(() => {
                        app
                            .auth()
                            .signInWithPopup(provider)
                            .then(result => {
                                if (checkIfIsABAEmail(result.user.email)) {
                                    history.push('/')
                                } else { app.auth().signOut() }
                            })
                            .catch(e => alert(e.message))
                    })
            } catch (error) { alert(`It seems like we have an error ${error}`); }
        },
        [history]
    )


    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />;
    }

    return (
        <div className={classes.mainDiv}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        BA Login Screen
                    </Typography>
                    <form onSubmit={handleLogin}>
                        <TextField
                            required
                            name="email"
                            id="outlined-password-input"
                            label="Email"
                            type="text"
                            autoComplete="current-password"
                            variant="outlined"
                            size="small"
                        />
                        <TextField
                            required
                            name="password"
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            size="small"
                        />
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                        >LogIn</Button>
                    </form>
                </CardContent>
                <CardActions>
                    <Button onClick={handleGLogin} size="medium"
                        variant="outlined"
                        color="primary"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="logo"
                            width="10px"
                        />Login with Google</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default withRouter(Login);