import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


//next time I inted hide it
const firebaseConfig = {
    apiKey: "AIzaSyDqX52pmPEJkC5QHT9qed6Xdz70drqnWQI",
    authDomain: "dev209henry.firebaseapp.com",
    projectId: "dev209henry",
    storageBucket: "dev209henry.firebasestorage.app",
    messagingSenderId: "393685476888",
    appId: "1:393685476888:web:e7632432481f30f3a7856d",
    measurementId: "G-1SFEY5VDYH"
}


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth};
