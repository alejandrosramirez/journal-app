import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { firebaseAuth } from "../firebase/config";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui";

export const AppRouter = () => {
	const { status } = useSelector((state) => state.auth);

	// TODO: Terminar esto
	useEffect(() => {
		onAuthStateChanged(firebaseAuth);
	}, []);

	if (status === "checking") {
		return <CheckingAuth />;
	}

	return (
		<Routes>
			<Route path="/auth/*" element={<AuthRoutes />} />

			<Route path="/*" element={<JournalRoutes />} />
		</Routes>
	);
};
