// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSwLdNLlPZ5_JXdG1SV-Uw7qhwCu8qrIw",
    authDomain: "beomgi-portfolio-2022.firebaseapp.com",
    projectId: "beomgi-portfolio-2022",
    storageBucket: "beomgi-portfolio-2022.appspot.com",
    messagingSenderId: "350658831610",
    appId: "1:350658831610:web:a394df54663ba59f455543",
    measurementId: "G-WLD572CQ46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);