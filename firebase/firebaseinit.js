// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnIa27bVn477s6tGBb7WAAkwJltj7IfTs",
    authDomain: "ecom-web-app-42b64.firebaseapp.com",
    projectId: "ecom-web-app-42b64",
    storageBucket: "ecom-web-app-42b64.appspot.com",
    messagingSenderId: "19964472089",
    appId: "1:19964472089:web:33392174d46e2aa111b388",
    measurementId: "G-WB54BX15GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);