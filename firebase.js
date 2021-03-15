import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_Pit7KuWlzfQ_aXMD12DzuF2kCjp1uOs",
  authDomain: "signal-clone-2d5e1.firebaseapp.com",
  projectId: "signal-clone-2d5e1",
  storageBucket: "signal-clone-2d5e1.appspot.com",
  messagingSenderId: "1071041603256",
  appId: "1:1071041603256:web:e2861b8b38a1d660bcb64d",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
