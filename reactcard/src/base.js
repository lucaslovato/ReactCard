import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyC-kq6zn7ox8x6YciJ9n_lY7EjvFTB_Hdo",
    authDomain: "react-card-d3493.firebaseapp.com",
    databaseURL: "https://react-card-d3493.firebaseio.com",
    projectId: "react-card-d3493",
    storageBucket: "react-card-d3493.appspot.com",
    messagingSenderId: 38969814341
});

export default app;

//the api key is being hard coded for now, but this needs to be changed
// as environment variable via .env file under project root