// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5iK-2yaMX2ugjR8t06QtVNt6z11a4o2g",
  authDomain: "tradezy-ea7e6.firebaseapp.com",
  projectId: "tradezy-ea7e6",
  storageBucket: "tradezy-ea7e6.appspot.com",
  messagingSenderId: "525500511739",
  appId: "1:525500511739:web:ab01c94d12985c4e21875e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

const auth = getAuth(app);

export {fireDB, auth};