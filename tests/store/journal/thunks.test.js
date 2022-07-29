import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../../../src/firebase/config";
import { addNote, savingNote, setActiveNote } from "../../../src/store/journal/journalSlice";
import { startAddNote } from "../../../src/store/journal/thunks";

describe("Pruebas en thunks", () => {
	const dispatch = jest.fn();
	const getState = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test("Debe de crear una nota en blanco si se usa startAddNote", async () => {
		const uid = "123ABC";
		getState.mockReturnValue({
			auth: { uid },
		});
		await startAddNote()(dispatch, getState);
		expect(dispatch).toHaveBeenCalledWith(savingNote());
		expect(dispatch).toHaveBeenCalledWith(addNote({
			title: "",
			body: "",
			date: expect.any(Number),
			id: expect.any(String),
		}));
		expect(dispatch).toHaveBeenCalledWith(setActiveNote({
			title: "",
			body: "",
			date: expect.any(Number),
			id: expect.any(String),
		}));

		// Borrar de firebase
		const collectionRef = collection(firebaseDB, `${uid}/journal/notes`);
		const docs = await getDocs(collectionRef);
		const deleteDocTasks = [];
		docs.forEach((doc) => deleteDocTasks.push(deleteDoc(doc.ref)));
		await Promise.all(deleteDocTasks);
	});
});
