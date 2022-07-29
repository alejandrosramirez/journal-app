import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

import { getEnvironments } from "../helpers/getEnvironments";

const {
	VITE_FIREBASE_APIKEY,
	VITE_FIREBASE_AUTHDOMAIN,
	VITE_FIREBASE_PROJECTID,
	VITE_FIREBASE_STORAGEBUCKET,
	VITE_FIREBASE_MESSAGINGSENDERID,
	VITE_FIREBASE_APPID,
} = getEnvironments();

// testing
// const firebaseConfig = {
// 	apiKey: "AIzaSyDe7qg54AUvA27kCt209D1buFxNq2JBFMw",
// 	authDomain: "foranytesting.firebaseapp.com",
// 	projectId: "foranytesting",
// 	storageBucket: "foranytesting.appspot.com",
// 	messagingSenderId: "814158853855",
// 	appId: "1:814158853855:web:1bd1da583eb6e9859a9b6a",
// };

// dev / prod
// const firebaseConfig = {
// 	apiKey: "AIzaSyC35sg3NddMd_x1rCwb9wkppvldkimRYRY",
// 	authDomain: "any-testing.firebaseapp.com",
// 	projectId: "any-testing",
// 	storageBucket: "any-testing.appspot.com",
// 	messagingSenderId: "395195702844",
// 	appId: "1:395195702844:web:899e85737526c21ba8ed39",
// };

const firebaseConfig = {
	apiKey: VITE_FIREBASE_APIKEY,
	authDomain: VITE_FIREBASE_AUTHDOMAIN,
	projectId: VITE_FIREBASE_PROJECTID,
	storageBucket: VITE_FIREBASE_STORAGEBUCKET,
	messagingSenderId: VITE_FIREBASE_MESSAGINGSENDERID,
	appId: VITE_FIREBASE_APPID,
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firebaseDB = getFirestore(firebaseApp);
