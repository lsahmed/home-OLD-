import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDf9T6ccncgwDFXVIQMWBWSR9zkT82yzXI",
    authDomain: "home-655f0.firebaseapp.com",
    projectId: "home-655f0",
    storageBucket: "home-655f0.firebasestorage.app",
    messagingSenderId: "106437975537",
    appId: "1:106437975537:web:f18207ad134bfb269e3850",
    measurementId: "G-99FXQQ03DJ"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};