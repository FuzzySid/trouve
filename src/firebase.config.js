import firebase from "firebase";
import config from "./constants/config";
import 'firebase/messaging';

firebase.initializeApp(config.firebaseConfig)
const messaging = firebase.messaging();
const db=firebase.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export const getToken = async(setTokenFound) => {
    await messaging.requestPermission();
    return messaging.getToken({vapidKey: 'BOlthJPqYCl7OpLsRt1oGZH3_0sr82XK156c_X-yDkkN-N3YLeVuHYijzNL41y7orPJ9oCjoblDIWBQAWmpnEB0'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});

  export {db,auth,storage, provider};