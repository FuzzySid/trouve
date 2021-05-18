import firebase from "firebase";
import config from "./constants/config";

const firebaseApp=firebase.initializeApp(config.firebaseConfig)
const db=firebase.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export {db,auth,storage, provider};