import  firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'



const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "re-vents-caa2b.firebaseapp.com",
    projectId: "re-vents-caa2b",
    storageBucket: "re-vents-caa2b.appspot.com",
    messagingSenderId: "136862902893",
    appId: "1:136862902893:web:a79a5c760f6912ddeeed64"
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase