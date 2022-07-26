import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{
				backgroundColor: "primary.main",
				borderRadius: 5,
				minHeight: "calc(100vh - 110px)",
			}}
			className="animate__animated animate__fadeIn animate__faster"
		>
			<Grid item xs={12}>
				<StarOutline sx={{ color: "white", fontSize: 100 }} />
			</Grid>
			<Grid item xs={12}>
				<Typography color="white" variant="h5">
					Selecciona o crea una entrada
				</Typography>
			</Grid>
		</Grid>
	);
};
