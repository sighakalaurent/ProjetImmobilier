// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmUWpuRizI5NsM0cSfLiwAPO9UScPcGBs",
    authDomain: "immobilier-5d3c5.firebaseapp.com",
    projectId: "immobilier-5d3c5",
    storageBucket: "immobilier-5d3c5.appspot.com",
    messagingSenderId: "488479613246",
    appId: "1:488479613246:web:203ecb4b1b67e1a0820c6f"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()