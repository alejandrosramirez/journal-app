import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";

export const JournalPage = () => {
	return (
		<JournalLayout>
			{/* <Typography>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Dolores maxime iste ea hic, porro libero optio dignissimos.
				Officia illum id, earum vitae alias tempora, consequuntur
				voluptatibus esse culpa, illo deserunt!
			</Typography> */}

			{/* <NothingSelectedView /> */}
			<NoteView />

			<IconButton
				size="large"
				sx={{
					backgroundColor: "error.main",
					bottom: 50,
					color: "white",
					position: "fixed",
					right: 50,
					":hover": { backgroundColor: "error.main", opacity: 0.9 },
				}}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
