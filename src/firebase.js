
import {initializeApp} from "firebase/app"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA8tTjraiKI6g5TLGG5sj81Kdac5WwOhZY",
  authDomain: "netflix-a1c2a.firebaseapp.com",
  projectId: "netflix-a1c2a",
  storageBucket: "netflix-a1c2a.appspot.com",
  messagingSenderId: "826327327399",
  appId: "1:826327327399:web:aa815c7c9aea79b612b182"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()