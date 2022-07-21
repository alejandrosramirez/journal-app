import {
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	updateProfile,
} from "firebase/auth";

import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		const result = await signInWithPopup(firebaseAuth, googleProvider);
		// const credentials = GoogleAuthProvider.credentialFromResult(result);

		const { displayName, email, photoURL, uid } = result.user;

		return {
			ok: true,
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		return {
			ok: false,
			errorCode,
			errorMessage,
		};
	}
};

export const registerUserWithEmailAndPassword = async ({
	displayName,
	email,
	password,
}) => {
	try {
		const response = await createUserWithEmailAndPassword(
			firebaseAuth,
			email,
			password
		);

		const { photoURL, uid } = response.user;

		await updateProfile(firebaseAuth.currentUser, { displayName });

		return {
			ok: true,
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		return {
			ok: false,
			errorCode,
			errorMessage,
		};
	}
};

export const loginWithEmailAndPassword = async ({ email, password }) => {
	try {
		const response = await signInWithEmailAndPassword(
			firebaseAuth,
			email,
			password
		);

		const { displayName, photoURL, uid } = response.user;

		return {
			ok: true,
			displayName,
			email,
			photoURL,
			uid,
		};
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;

		return {
			ok: false,
			errorCode,
			errorMessage,
		};
	}
};

export const logoutUser = async () => {
	return await firebaseAuth.signOut();
};
