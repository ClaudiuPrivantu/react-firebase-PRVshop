import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCgz3jH9y9MLQJ1BrimVFI7xQEqcZRAtcI",
  authDomain: "imobiliareprv.firebaseapp.com",
  projectId: "imobiliareprv",
  storageBucket: "imobiliareprv.appspot.com",
  messagingSenderId: "563965629406",
  appId: "1:563965629406:web:eb9dc151600c01f398c34f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app) //s-ar putea sa fie FireStore daca am erori
export const storage = getStorage(app)

export default app