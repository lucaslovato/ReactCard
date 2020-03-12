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

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    mainDiv: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
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
        const test = email.split('@');
        const test2 = "brickabode.com"
        console.log("test", email.split('@')[1]);
        console.log("test2", test2);
        console.log(test[1] === test2);
        return email.split('@')[1] === test2;
    }
    const handleGLogin = useCallback(
        async event => {
            const provider = new firebase.auth.GoogleAuthProvider();

            console.log("caiu aqui provider", provider);
            try {
                await app
                    .auth()
                    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
                    .then(() => {
                        console.log("caiu aqui app", app);
                        app
                            .auth()
                            .signInWithPopup(provider)
                            .then(result => {
                                console.log("result:", result.user.email)
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
                    <form onSubmit={handleLogin}>
                        <label>
                            Email
                    <input name="email" type="email" placeholder="Email" />
                        </label>
                        <label>
                            Password
                    <input name="password" type="password" placeholder="Password" />
                        </label>
                        <button type="submit">Log in</button>

                    </form>
                </CardContent>
                <CardActions>
                    <Button onClick={handleGLogin}>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="logo"
                            width="13px"
                            height="13px"
                        />Login with Google</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default withRouter(Login);