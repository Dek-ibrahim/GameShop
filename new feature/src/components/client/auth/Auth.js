// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDbOb9kZLai_fs2GPWoOqkFdQS8zk4_5CI',
  authDomain: 'huriye-aa339.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: '331511482632',
  appId: 'YOUR_APP_ID',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
