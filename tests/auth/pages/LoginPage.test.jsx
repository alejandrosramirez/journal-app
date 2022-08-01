import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";
import { notAuthenticatedState } from "../../fixtures/authFixtures";

const mockStartSignInWithGoogle = jest.fn();
const mockStartLoginWithEmailAndPassword = jest.fn();

jest.mock("../../../src/store/auth/thunks", () => ({
	startSignInWithGoogle: () => mockStartSignInWithGoogle,
	startLoginWithEmailAndPassword: ({ email, password }) => {
		return () => mockStartLoginWithEmailAndPassword({ email, password });
	},
}));

jest.mock("react-redux", () => ({
	...jest.requireActual("react-redux"),
	useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
	},
	preloadedState: {
		auth: notAuthenticatedState
	}
});

describe("Pruebas en <LoginPage />", () => {
	beforeEach(() => jest.clearAllMocks());

	test("Debe de mostrar el componente correctamente", () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);
		expect(screen.getAllByText("Login").length).toBeGreaterThanOrEqual(1);
	});

	test("Debe de llamar startSignInWithGoogle al presionar el botón de google", () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);
		const googleButton = screen.getByLabelText("google-btn");
		fireEvent.click(googleButton);
		expect(mockStartSignInWithGoogle).toHaveBeenCalled();
	});

	test("Debe de llamar startLoginWithEmailAndPassword al presionar el botón de submit", () => {
		const email = "alex@google.com";
		const password = "1234567890";
		render(
			<Provider store={store}>
				<MemoryRouter>
					<LoginPage />
				</MemoryRouter>
			</Provider>
		);
		const emailField = screen.getByTestId("email-field")
		fireEvent.change(emailField, { target: { name: "email", value: email } });
		const passwordField = screen.getByTestId("password-field");
		fireEvent.change(passwordField, { target: { name: "password", value: password } });
		const loginForm = screen.getByLabelText("login-form");
		fireEvent.submit(loginForm);
		expect(mockStartLoginWithEmailAndPassword).toHaveBeenLastCalledWith({ email, password });
	});
});
