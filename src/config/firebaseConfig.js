// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA20SpxP2X7beSa9qv_U6XyE52_D4KQPxw",
  authDomain: "ajoinecommerceapp.firebaseapp.com",
  projectId: "ajoinecommerceapp",
  storageBucket: "ajoinecommerceapp.appspot.com",
  messagingSenderId: "908793384947",
  appId: "1:908793384947:web:2953e40b527882ea280c86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};