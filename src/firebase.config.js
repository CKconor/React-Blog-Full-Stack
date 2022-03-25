// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDnwwUDHAZJe2SKPko4V1n7kxLhnv4oJyY",
    authDomain: "react-blog-ckconor.firebaseapp.com",
    databaseURL: "https://react-blog-ckconor-default-rtdb.firebaseio.com",
    projectId: "react-blog-ckconor",
    storageBucket: "react-blog-ckconor.appspot.com",
    messagingSenderId: "152643536938",
    appId: "1:152643536938:web:add6d6f34f59546eae1b53",
    measurementId: "G-CPYH78TEML"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);