import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";

import { firebaseDB } from "../../firebase/config";
import { fileUpload, loadNotes } from "../../helpers";
import {
	addNote,
	deleteNote,
	savingNote,
	setActiveNote,
	setImagesToActiveNote,
	setIsSaving,
	setNotes,
	updateNote,
} from "./";

export const startAddNote = () => {
	return async (dispatch, getState) => {
		dispatch(savingNote());

		const { uid } = getState().auth;

		const note = {
			title: "",
			body: "",
			date: new Date().getTime(),
		};

		const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));

		await setDoc(newDoc, note);

		note.id = newDoc.id;

		dispatch(addNote(note));
		dispatch(setActiveNote(note));
	};
};

export const startSetNotes = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		const notes = await loadNotes(uid);

		dispatch(setNotes(notes));
	};
};

export const startUpdateNote = () => {
	return async (dispatch, getState) => {
		dispatch(setIsSaving());

		const { uid } = getState().auth;
		const { activeNote } = getState().journal;

		const note = { ...activeNote };
		delete note.id;

		const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}`);

		await setDoc(docRef, note, { merge: true });

		dispatch(updateNote(activeNote));
	};
};

export const startUploadFiles = (files = []) => {
	return async (dispatch) => {
		dispatch(setIsSaving());

		const fileUploadTasks = [];
		for (const file of files) {
			fileUploadTasks.push(fileUpload(file));
		}

		const imageUrls = await Promise.all(fileUploadTasks);

		dispatch(setImagesToActiveNote(imageUrls));
	};
};

export const startDeleteNote = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const { activeNote } = getState().journal;

		const docRef = doc(firebaseDB, `${uid}/journal/notes/${activeNote.id}`);
		await deleteDoc(docRef);

		dispatch(deleteNote(activeNote.id));
	};
};
