// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDV0jBbx91HQw4mQwlHJk2a1xKEyGXLlgU",
	authDomain: "recetas-397eb.firebaseapp.com",
	projectId: "recetas-397eb",
	storageBucket: "recetas-397eb.appspot.com",
	messagingSenderId: "806739808902",
	appId: "1:806739808902:web:6b23024d14e2b81a403707",
	measurementId: "G-4SMB7RXHC7"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
