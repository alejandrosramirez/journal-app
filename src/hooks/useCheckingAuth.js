import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { firebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";

export const useCheckingAuth = () => {
	const { status } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	// TODO: Terminar esto
	useEffect(() => {
		onAuthStateChanged(firebaseAuth, async (user) => {
			if (!user) {
				return dispatch(logout());
			}

			const { displayName, email, photoURL, uid } = user;

			dispatch(login({ displayName, email, photoURL, uid }));
		});
	}, []);

	return status;
};
