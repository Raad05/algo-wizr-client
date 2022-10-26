// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxds9mhgiUgppFZwMEPE1Ze1O6xvW34cE",
    authDomain: "algo-wizr-client.firebaseapp.com",
    projectId: "algo-wizr-client",
    storageBucket: "algo-wizr-client.appspot.com",
    messagingSenderId: "403750323032",
    appId: "1:403750323032:web:f6b028461a89588c191b2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;