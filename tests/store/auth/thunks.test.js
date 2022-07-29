import {
	loginWithEmailAndPassword,
	logoutUser,
	registerUserWithEmailAndPassword,
	signInWithGoogle,
} from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import {
	startCheckingCredentials,
	startLoginWithEmailAndPassword,
	startLogoutUser,
	startRegisterUserWithEmailAndPassword,
	startSignInWithGoogle,
} from "../../../src/store/auth/thunks";
import { clearNotes } from "../../../src/store/journal/journalSlice";
import { testUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe("Pruebas en thunks", () => {
	const dispatch = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test("Debe de invocar checkingCredentials", async () => {
		await startCheckingCredentials()(dispatch);
		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
	});

	test("Debe de llamar a checkingCredentials y login se usa startSignInWithGoogle 'Correcto'", async () => {
		const testLogin = { ok: true, ...testUser };
		await signInWithGoogle.mockResolvedValue(testLogin);
		await startSignInWithGoogle()(dispatch);
		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(testLogin));
	});

	test("Debe de llamar a checkingCredentials y logout se usa startSignInWithGoogle 'Incorrecto'", async () => {
		const testLogin = {
			ok: false,
			errorMessage: "Ocurrió un error con google",
		};
		await signInWithGoogle.mockResolvedValue(testLogin);
		await startSignInWithGoogle()(dispatch);
		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(logout(testLogin));
	});

	test("Debe de llamar a checkingCredentials y login si se usa startLoginWithEmailAndPassword 'Correcto'", async () => {
		const testLogin = { ok: true, ...testUser };
		const form = {
			email: testUser.email,
			password: "1234567890",
		};
		await loginWithEmailAndPassword.mockResolvedValue(testLogin);
		await startLoginWithEmailAndPassword(form)(dispatch);
		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(testLogin));
	});

	test("Debe de llamar a checkingCredentials y logout si se usa startLoginWithEmailAndPassword 'Incorrecto'", async () => {
		const testLogin = {
			ok: false,
			errorMessage: "Ocurrio un error con las credenciales de usuario",
		};
		const form = {
			email: testUser.email,
			password: "1234567890",
		};
		await loginWithEmailAndPassword.mockResolvedValue(testLogin);
		await startLoginWithEmailAndPassword(form)(dispatch);
		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(logout(testLogin));
	});

	test("Debe de llamar a checkingCredentials y login si se usa startRegisterUserWithEmailAndPassword 'Correcto'", async () => {
		const testLogin = { ok: true, ...testUser };
		const form = {
			displayName: testUser.displayName,
			email: testUser.email,
			password: "1234567890",
		};
		await registerUserWithEmailAndPassword.mockResolvedValue(testLogin);
		await startRegisterUserWithEmailAndPassword(form)(dispatch);
		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(login(testLogin));
	});

	test("Debe de llamar a checkingCredentials y logout si se usa startRegisterUserWithEmailAndPassword 'Incorrecto'", async () => {
		const testLogin = {
			ok: false,
			errorMessage:
				"Ocurrió un error al registrar al usuario con las credenciales proporcionadas",
		};
		const form = {
			displayName: testUser.displayName,
			email: testUser.email,
			password: "1234567890",
		};
		await registerUserWithEmailAndPassword.mockResolvedValue(testLogin);
		await startRegisterUserWithEmailAndPassword(form)(dispatch);
		expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
		expect(dispatch).toHaveBeenCalledWith(logout(testLogin));
	});

	test("Debe de llamar a logoutUser, clearNotes y logout si se llama startLogoutUser", async () => {
		await startLogoutUser()(dispatch);
		expect(logoutUser).toHaveBeenCalled();
		expect(dispatch).toHaveBeenCalledWith(clearNotes());
		expect(dispatch).toHaveBeenCalledWith(logout());

	});
});
