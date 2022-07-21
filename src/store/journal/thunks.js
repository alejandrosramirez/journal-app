import { collection, doc, setDoc } from "firebase/firestore/lite";

import { firebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import { addNote, savingNote, setActiveNote, setNotes } from "./";

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
