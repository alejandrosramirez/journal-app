import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
	name: "journal",
	initialState: {
		isSavingNote: false,
		messageSaved: "",
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
		},
		setNotes: (state, action) => {
			state.notes = action.payload;
		},
		setIsSaving: (state) => {},
		updateNote: (state, action) => {},
		deleteNote: (state, action) => {},
	},
});

export const {
	addNote,
	deleteNote,
	savingNote,
	setActiveNote,
	setIsSaving,
	setNotes,
	updateNote,
} = journalSlice.actions;
