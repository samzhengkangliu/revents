import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDot0Q87z21WpM6M0jTbbHgVuKMagNX4rI',
  authDomain: 'revents-web-app.firebaseapp.com',
  projectId: 'revents-web-app',
  storageBucket: 'revents-web-app.appspot.com',
  messagingSenderId: '493864519588',
  appId: '1:493864519588:web:5e4e96fd5f1c862e47a331',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
