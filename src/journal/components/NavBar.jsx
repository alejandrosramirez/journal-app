import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

import { startLogoutUser } from "../../store/auth";

export const NavBar = ({ drawerWidth }) => {
	const dispatch = useDispatch();

	const onClickLogout = () => {
		dispatch(startLogoutUser());
	};

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
						Journal App
					</Typography>

					<IconButton color="error" onClick={onClickLogout}>
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
