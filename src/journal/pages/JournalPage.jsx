import { useDispatch, useSelector } from "react-redux";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { startAddNote } from "../../store/journal/thunks";

export const JournalPage = () => {
	const { isSavingNote, activeNote } = useSelector((state) => state.journal);

	const dispatch = useDispatch();

	const onClickAddNote = () => {
		dispatch(startAddNote());
	};

	return (
		<JournalLayout>
			{!!activeNote ? <NoteView /> : <NothingSelectedView />}

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
				onClick={onClickAddNote}
				disabled={isSavingNote}
			>
				<AddOutlined sx={{ fontSize: 30 }} />
			</IconButton>
		</JournalLayout>
	);
};
