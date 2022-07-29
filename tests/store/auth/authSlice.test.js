import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, initialState, testUser } from "../../fixtures/authFixtures";

describe("Pruebas en authSlice", () => {
	test("Debe de regresar el estado inicial y llamarse 'auth'", () => {
		const state = authSlice.reducer(initialState, {});
		expect(state).toEqual(initialState);
		expect(authSlice.name).toBe("auth");
	});

	test("Debe de realizar la autenticación", () => {
		const state = authSlice.reducer(initialState, login(testUser));
		expect(state).toEqual({
			status: "authenticated", // checking, not-authenticated, authenticated
			uid: testUser.uid,
			email: testUser.email,
			displayName: testUser.displayName,
			photoURL: testUser.photoURL,
			errorMessage: null,
		});
	});

	test("Debe de realizar el logout sin argumentos", () => {
		const state = authSlice.reducer(authenticatedState, logout());
		expect(state).toEqual({
			status: "not-authenticated", // checking, not-authenticated, authenticated
			uid: null,
			email: null,
			displayName: null,
			photoURL: null,
			errorMessage: undefined,
		});
	});

	test("Debe de realizar el logout y mostrar un mensaje de error", () => {
		const errorMessage = "Credenciales incorrectas";
		const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));
		expect(state).toEqual({
			status: "not-authenticated", // checking, not-authenticated, authenticated
			uid: null,
			email: null,
			displayName: null,
			photoURL: null,
			errorMessage,
		});
	});

	test("Debe de cambiar el estado a checking", () => {
		const state = authSlice.reducer(authenticatedState, checkingCredentials());
		expect(state.status).toBe("checking");
	});
});
