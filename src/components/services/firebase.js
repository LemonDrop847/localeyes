import { initializeApp } from 'firebase/app'
import {
  getFirestore
} from 'firebase/firestore'
import {
  getAuth
} from 'firebase/auth'
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBlQ0HT99JoEsa03V0NnZ-Qlsf1wLhx17Q",
    authDomain: "localeyes-6e1b8.firebaseapp.com",
    projectId: "localeyes-6e1b8",
    storageBucket: "localeyes-6e1b8.appspot.com",
    messagingSenderId: "397507381708",
    appId: "1:397507381708:web:8f4a184668d29137d23569",
    measurementId: "G-R9ZZ9LCP42"
};   

// init firebase
const app=initializeApp(firebaseConfig)
const db = getFirestore()
const auth=getAuth(app);
const storage=getStorage(app);

export {db,auth,storage,app};