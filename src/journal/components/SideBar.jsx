import PropTypes from "prop-types";
import {
	Box,
	Divider,
	Drawer,
	Grid,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

export const SideBar = ({ drawerWidth }) => {
	return (
		<Box
			component="nav"
			sx={{ flexShrink: { sm: 0 }, width: { sm: drawerWidth } }}
		>
			<Drawer
				variant="permanent"
				open
				sx={{
					display: { xs: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: drawerWidth,
					},
				}}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Alex
					</Typography>
				</Toolbar>

				<Divider />

				<List>
					{["Enero", "Febrero", "Marzo"].map((text) => (
						<ListItem key={text} disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<TurnedInNot />
								</ListItemIcon>
								<Grid container>
									<ListItemText primary={text} />
									<ListItemText secondary={"Lorem ipsum si, si, de todos estos ejemplos, todos son información innecesaria"} />
								</Grid>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
};

SideBar.propTypes = {
	drawerWidth: PropTypes.number.isRequired,
};
