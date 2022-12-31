// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxUr0i_qSBWgKm428aXBhow_0jCPiyZho",
  authDomain: "password-auth-practice.firebaseapp.com",
  projectId: "password-auth-practice",
  storageBucket: "password-auth-practice.appspot.com",
  messagingSenderId: "656422398141",
  appId: "1:656422398141:web:24f6586a2a2770f5212fd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;