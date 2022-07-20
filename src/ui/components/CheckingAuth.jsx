import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{
				backgroundColor: "primary.main",
				minHeight: "100vh",
				padding: 4,
			}}
		>
			<Grid item direction="row" justifyContent="center">
				<CircularProgress color="warning" />
			</Grid>
		</Grid>
	);
};
