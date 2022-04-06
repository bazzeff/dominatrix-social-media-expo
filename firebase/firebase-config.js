// no longer use this v8 import firebase from 'firebase';  
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { 
  getAuth
} from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

//!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app); 

const db = getFirestore(app);

const authentication = getAuth(app);
export {
authentication,
  db,  
};
