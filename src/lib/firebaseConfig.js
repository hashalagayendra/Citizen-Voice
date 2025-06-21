import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBxYJoOT9-L3xMBtLvk8lbp1cVFdbu20ew",
  authDomain: "citizen-voice-54940.firebaseapp.com",
  projectId: "citizen-voice-54940",
  storageBucket: "citizen-voice-54940.firebasestorage.app",
  messagingSenderId: "937162896099",
  appId: "1:937162896099:web:31c77e3570abb847b90bd6",
  measurementId: "G-EBMQGV8JWN",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
