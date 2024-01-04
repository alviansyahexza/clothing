// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLkElGwzvD1N5-4um8M4N7WGKXt7aWSyY",
  authDomain: "react-clothing-935c3.firebaseapp.com",
  projectId: "react-clothing-935c3",
  storageBucket: "react-clothing-935c3.appspot.com",
  messagingSenderId: "856731895242",
  appId: "1:856731895242:web:db874b4348b3c96b2a7b33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const googleAuth = getAuth();
export const googleSignInWithPopup = () =>
  signInWithPopup(googleAuth, provider);

export const googleSignInWithRedirect = () =>
  signInWithRedirect(googleAuth, provider);

export const db = getFirestore();

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
};

export const getCategoriesAndDocs = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshots = await getDocs(q);

  const categoryMap = querySnapshots.docs.reduce((acc, snap) => {
    const { title, items } = snap.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const createUser = async (userAuth, displayName = null) => {
  if (!userAuth) return;

  const userRef = doc(db, "user", userAuth.uid);

  const userInDb = await getDoc(userRef);
  if (!userInDb.exists()) {
    const email = userAuth.email;
    const createdAt = Date();
    if (!displayName) displayName = userAuth.displayName;

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

export const createUserByEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(googleAuth, email, password);
};

export const signinWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(googleAuth, email, password);
};

export const signOutUser = async () => await signOut(googleAuth);

export const onAuthListerner = (callback) =>
  onAuthStateChanged(googleAuth, callback);
