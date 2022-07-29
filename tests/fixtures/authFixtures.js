export const initialState = {
	status: "checking", // checking, not-authenticated, authenticated
	uid: null,
	email: null,
	displayName: null,
	photoURL: null,
	errorMessage: null,
};

export const authenticatedState = {
	status: "authenticated", // checking, not-authenticated, authenticated
	uid: "123ABC",
	email: "alex@mail.com",
	displayName: "Alex",
	photoURL: "https://via.placeholder.com/50",
	errorMessage: null,
};

export const notAuthenticatedState = {
	status: "not-authenticated", // checking, not-authenticated, authenticated
	uid: null,
	email: null,
	displayName: null,
	photoURL: null,
	errorMessage: null,
};

export const testUser = {
	uid: "123ABC",
	email: "alex@mail.com",
	displayName: "Alex",
	photoURL: "https://via.placeholder.com/50",
};
