import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
	name: "journal",
	initialState: {
		isSavingNote: false,
		message: "",
		notes: [],
		activeNote: null,
		// active: {
		// 	id: "",
		// 	title: "",
		// 	body: "",
		// 	date: 0,
		// 	imageUrls: [],
		// },
	},
	reducers: {
		savingNote: (state) => {
			state.isSavingNote = true;
		},
		addNote: (state, action) => {
			state.notes.push(action.payload);
			state.isSavingNote = false;
		},
		setActiveNote: (state, action) => {
			state.activeNote = action.payload;
			state.message = "";
		},
		setNotes: (state, action) => {
			state.notes = action.payload;
		},
		setIsSaving: (state) => {
			state.isSavingNote = true;
			state.message = "";
		},
		updateNote: (state, action) => {
			state.isSavingNote = false;
			state.notes = state.notes.map((note) => {
				if (note.id === action.payload.id) {
					return action.payload;
				}

				return note;
			});
			state.message = `${action.payload.title}, actualizada correctamente`;
		},
		setImagesToActiveNote: (state, action) => {
			state.activeNote.imageUrls = [
				...state.activeNote.imageUrls,
				...action.payload,
			];
			state.isSavingNote = false;
		},
		clearNotes: (state) => {
			state.isSavingNote = false;
			state.message = "";
			state.notes = [];
			state.activeNote = null;
		},
		deleteNote: (state, action) => {
			state.notes = state.notes.filter(
				(note) => note.id !== action.payload
			);
			state.activeNote = null;
		},
	},
});

export const {
	addNote,
	clearNotes,
	deleteNote,
	savingNote,
	setActiveNote,
	setImagesToActiveNote,
	setIsSaving,
	setNotes,
	updateNote,
} = journalSlice.actions;
