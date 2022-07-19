import PropTypes from "prop-types";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";

export const NavBar = ({ drawerWidth }) => {
	return (
		<AppBar
			position="fixed"
			sx={{
				ml: { sm: `${drawerWidth}px` },
				width: { sm: `calc(100% - ${drawerWidth}px)` },
			}}
		>
			<Toolbar>
				<IconButton
					color="inherit"
					edge="start"
					sx={{ display: { sm: "none" }, mr: 2 }}
				>
					<MenuOutlined />
				</IconButton>

				<Grid
					container
					direction="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<Typography variant="h6" noWrap component="div">
						Jornal App
					</Typography>

					<IconButton color="error">
						<LogoutOutlined />
					</IconButton>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

NavBar.propTypes = {
	drawerWidth: PropTypes.number.isRequired,
};
