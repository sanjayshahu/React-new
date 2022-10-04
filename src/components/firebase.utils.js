import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBYebB7dJcmIXJXqi9N4aq2lu9P-fXWGHo",
  authDomain: "ecom-groovy.firebaseapp.com",
  projectId: "ecom-groovy",
  storageBucket: "ecom-groovy.appspot.com",
  messagingSenderId: "37738380370",
  appId: "1:37738380370:web:a09475361ae416840a738b"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;//from firebase
//only for pushing into users collection
  const userRef = firestore.doc(`users/${userAuth.uid}`);//doc reference is used fix this issue uid is unique identifier  for user

  const snapShot = await userRef.get();//snapshot for actual data a

  if (!snapShot.exists) {//if user doesnot exist create new and add it to users collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);//here only provider used is google with signwith popup

export default firebase;