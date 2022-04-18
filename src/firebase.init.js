// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAC5Ltz8NYIin-arqod08La53ntcZViGhk",
    authDomain: "eyun-fitness.firebaseapp.com",
    projectId: "eyun-fitness",
    storageBucket: "eyun-fitness.appspot.com",
    messagingSenderId: "414275953606",
    appId: "1:414275953606:web:091c57ff7d30fd023308c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;