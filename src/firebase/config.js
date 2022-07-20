import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
	apiKey: "AIzaSyC35sg3NddMd_x1rCwb9wkppvldkimRYRY",
	authDomain: "any-testing.firebaseapp.com",
	projectId: "any-testing",
	storageBucket: "any-testing.appspot.com",
	messagingSenderId: "395195702844",
	appId: "1:395195702844:web:899e85737526c21ba8ed39",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export const firebaseDB = getFirestore(firebaseApp);
