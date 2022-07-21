import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	DeleteOutline,
	SaveOutlined,
	UploadOutlined,
} from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import {
	setActiveNote,
	startDeleteNote,
	startUpdateNote,
	startUploadFiles,
} from "../../store/journal";

export const NoteView = () => {
	const { activeNote, message, isSavingNote } = useSelector(
		(state) => state.journal
	);

	const dispatch = useDispatch();

	const { title, body, date, onChange, formState } = useForm(activeNote);

	const dateString = useMemo(() => {
		const newDate = new Date(date);

		return newDate.toUTCString();
	}, [date]);

	const fileRef = useRef();

	useEffect(() => {
		dispatch(setActiveNote(formState));
	}, [formState]);

	useEffect(() => {
		if (message.length > 0) {
			Swal.fire("Nota actualizada", message, "success");
		}
	}, [message]);

	const onClickUpdateNote = () => {
		dispatch(startUpdateNote());
	};

	const onChangeFile = ({ target }) => {
		if (target.files === 0) {
			return;
		}

		dispatch(startUploadFiles(target.files));
	};

	const onClickDeleteNote = () => {
		dispatch(startDeleteNote());
	};

	return (
		<Grid
			container
			direction="row"
			justifyContent="space-between"
			sx={{ mb: 1 }}
			className="animate__animated animate__fadeIn animate__faster"
		>
			<Grid item>
				<Typography fontSize={39} fontWeight="light">
					{dateString}
				</Typography>
			</Grid>

			<Grid item>
				<input
					type="file"
					multiple
					accept="image/*"
					ref={fileRef}
					onChange={onChangeFile}
					style={{ display: "none" }}
				/>

				<IconButton
					color="primary"
					disabled={isSavingNote}
					onClick={() => fileRef.current.click()}
					sx={{ mr: 1 }}
				>
					<UploadOutlined />
				</IconButton>

				<Button
					color="primary"
					sx={{ padding: 2 }}
					onClick={onClickUpdateNote}
					disabled={isSavingNote}
				>
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
					name="title"
					onChange={onChange}
					value={title}
				/>

				<TextField
					type="text"
					variant="filled"
					multiline
					placeholder="¿En que piensas?"
					minRows={5}
					fullWidth
					name="body"
					onChange={onChange}
					value={body}
				/>
			</Grid>

			<Grid container justifyContent="end" sx={{ mt: 1 }}>
				<Button color="error" sx={{ padding: 2 }} onClick={onClickDeleteNote}>
					<DeleteOutline sx={{ fontSize: 30, mr: 1 }} />
					Borrar
				</Button>
			</Grid>

			<ImageGallery imageUrls={activeNote.imageUrls} />
		</Grid>
	);
};
