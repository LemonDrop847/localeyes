import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBlQ0HT99JoEsa03V0NnZ-Qlsf1wLhx17Q",
  authDomain: "localeyes-6e1b8.firebaseapp.com",
  projectId: "localeyes-6e1b8",
  storageBucket: "localeyes-6e1b8.appspot.com",
  messagingSenderId: "397507381708",
  appId: "1:397507381708:web:0ff9e4d0932e8cd1d23569",
  measurementId: "G-S5QG9VHRV6"
};

// init firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {app,auth,db,storage};
