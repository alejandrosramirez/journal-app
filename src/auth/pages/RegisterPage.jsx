import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
	Alert,
	Button,
	Grid,
	Link,
	TextField,
	Typography,
} from "@mui/material";

import { useForm } from "../../hooks";
import { AuthLayout } from "../layout/AuthLayout";
import { startRegisterUserWithEmailAndPassword } from "../../store/auth";

const formData = {
	displayName: "",
	email: "",
	password: "",
};

const formValidations = {
	displayName: [(value) => value.length >= 1, "El nombre es obligatorio."],
	email: [(value) => value.includes("@"), "El correo debe tener un @."],
	password: [
		(value) => value.length >= 6,
		"El password debe de tener más de 6 letras.",
	],
};

export const RegisterPage = () => {
	const [formSubmitted, setFormSubmitted] = useState(false);

	const { status, errorMessage } = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const {
		displayName,
		email,
		password,
		onChange,
		formState,
		displayNameValid,
		emailValid,
		passwordValid,
		formValid,
	} = useForm(formData, formValidations);

	const isAuthenticating = useMemo(() => status === "checking", [status]);

	const onSubmit = (event) => {
		event.preventDefault();

		setFormSubmitted(true);

		if (!formValid) {
			return;
		}

		dispatch(startRegisterUserWithEmailAndPassword(formState));
	};

	return (
		<AuthLayout title="Registro">
			<form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
				<Grid container>
					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Nombre completo"
							type="text"
							placeholder="Nombre completo"
							fullWidth
							name="displayName"
							value={displayName}
							onChange={onChange}
							error={!!displayNameValid && formSubmitted}
							helperText={displayNameValid}
						/>
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Correo"
							type="email"
							placeholder="correo@correo.com"
							fullWidth
							name="email"
							value={email}
							onChange={onChange}
							error={!!emailValid && formSubmitted}
							helperText={emailValid}
						/>
					</Grid>

					<Grid item xs={12} sx={{ mt: 2 }}>
						<TextField
							label="Contraseña"
							type="password"
							placeholder="Contraseña"
							fullWidth
							name="password"
							value={password}
							onChange={onChange}
							error={!!passwordValid && formSubmitted}
							helperText={passwordValid}
						/>
					</Grid>

					<Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
						<Grid
							item
							xs={12}
							display={!!errorMessage ? "" : "none"}
						>
							<Alert severity="error">{errorMessage}</Alert>
						</Grid>

						<Grid item xs={12}>
							<Button
								type="submit"
								variant="contained"
								fullWidth
								disabled={isAuthenticating}
							>
								Crear cuenta
							</Button>
						</Grid>
					</Grid>

					<Grid container direction="row" justifyContent="end">
						<Typography sx={{ mr: 1 }}>
							¿Ya tienes cuenta?
						</Typography>

						<Link
							component={RouterLink}
							color="inherit"
							to="/auth/login"
						>
							Acceder
						</Link>
					</Grid>
				</Grid>
			</form>
		</AuthLayout>
	);
};
