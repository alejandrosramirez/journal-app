import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			sx={{ mb: 1 }}
		>
			<Grid item>
				<Typography fontSize={39} fontWeight="light">
					19 de julio, 2022
				</Typography>
			</Grid>

			<Grid item>
				<Button color="primary" sx={{ padding: 2 }}>
					<SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
					Guardar
				</Button>
			</Grid>

			<Grid container sx={{ mt: 1 }}>
				<TextField
					type="text"
					label="Título"
					variant="filled"
					placeholder="Ingresa un título"
					sx={{ boder: "none", mb: 1 }}
					fullWidth
				/>

				<TextField
					type="text"
					variant="filled"
					multiline
					placeholder="¿En que piensas?"
					minRows={5}
					fullWidth
				/>
			</Grid>

			<ImageGallery />
		</Grid>
	);
};
