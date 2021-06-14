import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAjox-3Q11ebRXpWkI9LF3tBr9iiQrhXXg',
  authDomain: 'jaredazon.firebaseapp.com',
  projectId: 'jaredazon',
  storageBucket: 'jaredazon.appspot.com',
  messagingSenderId: '150477988268',
  appId: '1:150477988268:web:7fb42e720956c8a5b75a09',
  measurementId: 'G-77RSE5GTQ9'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };