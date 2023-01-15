import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0zFsu0EXIH6l_Zd6AY-EZbCIr5sjZPu0",
  authDomain: "olx-react-clone-cd40e.firebaseapp.com",
  projectId: "olx-react-clone-cd40e",
  storageBucket: "olx-react-clone-cd40e.appspot.com",
  messagingSenderId: "953122210435",
  appId: "1:953122210435:web:8c880f296559633fe551b6",
  measurementId: "G-LMNHBCRSEM"
};

export default firebase.initializeApp(firebaseConfig);
