import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB_Gc4NlSaFjAXg1Z1tXE1b-j-Fgra7XpU",
    authDomain: "fir-tutorial-99f03.firebaseapp.com",
    projectId: "fir-tutorial-99f03",
    storageBucket: "fir-tutorial-99f03.appspot.com",
    messagingSenderId: "953770953720",
    appId: "1:953770953720:web:b01e82ea3038ffe7a6a40d",
    measurementId: "G-PR8P0K5B6Z"
  };

  const app = initializeApp(firebaseConfig)

  export const db = getFirestore(app)
