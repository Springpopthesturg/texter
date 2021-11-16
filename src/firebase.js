import * as firebase from "firebase/app";
 import "firebase/firestore";
 import { getFirestore } from "@firebase/firestore";

 const firebaseConfig = {
  apiKey: "AIzaSyCG6VI19oamQz1QSEvC6ctppcxr2gH4DmI",
  authDomain: "texter-ae216.firebaseapp.com",
  projectId: "texter-ae216",
  storageBucket: "texter-ae216.appspot.com",
  messagingSenderId: "62643713198",
  appId: "1:62643713198:web:a36137683529361927693f",
  measurementId: "G-7BNDC258LR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = getFirestore(firebaseApp);

 export { db };