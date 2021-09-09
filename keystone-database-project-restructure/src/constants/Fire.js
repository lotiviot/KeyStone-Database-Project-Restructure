import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
// firebase things. Ids/domains
const firebaseConfig = {
  apiKey: "AIzaSyDH9oZefTc_geVwEmiYIQ-luTA9Qkngs-Q",
  authDomain: "keystone-database-application.firebaseapp.com",
  projectId: "keystone-database-application",
  storageBucket: "keystone-database-application.appspot.com",
  messagingSenderId: "240357466135",
  appId: "1:240357466135:web:f4f329ff9b0c94b576fc52",
  measurementId: "G-C9YQJMC99D"
};
  // firebase API initaliazed with above info
  const fire = firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const storage = firebase.storage()

export default fire;
