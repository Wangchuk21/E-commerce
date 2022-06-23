import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config={
    apiKey: "AIzaSyAgloRbGHAUfzwY-qtNdB2EKwvlbB3n6uY",
    authDomain: "ecom-db-f768e.firebaseapp.com",
    projectId: "ecom-db-f768e",
    storageBucket: "ecom-db-f768e.appspot.com",
    messagingSenderId: "133116710310",
    appId: "1:133116710310:web:9d5ccc8472cfb8798d5367",
    measurementId: "G-91FBHMQH6T"
  };

  export const createUserProfileDocument= async(userAuth, additionalData)=>
  {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

   // console.log(snapShot)

   if(!snapShot.exists){
     const {displayName, email}= userAuth;
     const createAt= new Date();

     try{
       await userRef.set({
         displayName,
         email,
         createAt,
         ...additionalData
       })
     } catch(error){
       console.log('error creating user', error.message);
     }
   }
   return userRef;

  }


firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>
  auth.signInWithPopup(provider);

export default firebase;