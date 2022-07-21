import {
	loginWithEmailAndPassword,
	logoutUser,
	registerUserWithEmailAndPassword,
	signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const startCheckingCredentials = (email, password) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());
	};
};

export const startSignInWithGoogle = () => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await signInWithGoogle();

		if (!result.ok) {
			return dispatch(logout(result));
		}

		dispatch(login(result));
	};
};

export const startRegisterUserWithEmailAndPassword = ({
	displayName,
	email,
	password,
}) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await registerUserWithEmailAndPassword({
			displayName,
			email,
			password,
		});

		if (!result.ok) {
			return dispatch(logout(result));
		}

		dispatch(login(result));
	};
};

export const startLoginWithEmailAndPassword = ({ email, password }) => {
	return async (dispatch) => {
		dispatch(checkingCredentials());

		const result = await loginWithEmailAndPassword({ email, password });

		if (!result.ok) {
			return dispatch(logout(result));
		}

		dispatch(login(result));
	};
};

export const startLogoutUser = () => {
	return async (dispatch) => {
		await logoutUser();

		dispatch(logout());
	};
};
