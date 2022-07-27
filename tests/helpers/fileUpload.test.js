import { fileUpload } from "../../src/helpers";

describe("Pruebas en fileUpload", () => {
	test("Debe subir el archivo correctamente a cloudinary", async () => {
		const imageUrl = "https://static.wixstatic.com/media/df9fb8_a598c6d40bb143ec9bfaa56b67fcadcf~mv2.jpg/v1/fill/w_1000,h_563,al_c,q_90/df9fb8_a598c6d40bb143ec9bfaa56b67fcadcf~mv2.jpg";

		const response = await fetch(imageUrl);

		const blob = await response.blob();

		const file = new File([blob]);

		const url = await fileUpload(file);

		expect(typeof url).toBe("string");
	});
});
