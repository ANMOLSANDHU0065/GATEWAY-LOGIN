// GATEWAY Firebase configuration
// Firebase Console > Project settings > Your apps > GATEWAY Web
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyC3WjNmBi1kYLEFXOPwf8m4m18cKDBGnk4',
  authDomain: 'gateway-07.firebaseapp.com',
  projectId: 'gateway-07',
  storageBucket: 'gateway-07.firebasestorage.app',
  messagingSenderId: '742352128932',
  appId: '1:742352128932:web:afd3fd7b2fc4c5da500f31'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
