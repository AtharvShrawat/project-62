 import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDKczDwPMwHsuiPks7uOTOb-2LNEqyHumM",
  authDomain: "school-app-52370.firebaseapp.com",
  databaseURL: "https://school-app-52370-default-rtdb.firebaseio.com",
  projectId: "school-app-52370",
  storageBucket: "school-app-52370.appspot.com",
  messagingSenderId: "1001172504177",
  appId: "1:1001172504177:web:ee427c154547c5798495d0",
  measurementId: "G-9SX2QSKD5B"
};
//initialize your database

  firebase.initializeApp(firebaseConfig);

  export default firebase.database()
 

  