import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZo1F0qkt9n_lgU0cm3YJmOK54Duwzm6Y",
  authDomain: "clinic-website-3118f.firebaseapp.com",
  projectId: "clinic-website-3118f",
  storageBucket: "clinic-website-3118f.firebasestorage.app",
  messagingSenderId: "907925287586",
  appId: "1:907925287586:web:80d3f16bbfa5ec165f1dfb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);