import { fileUpload } from "../../src/helpers/fileUpload";

describe("Pruebas en fileUpload", () => {
	test("Debe subir el archivo correctamente a cloudinary", async () => {
		const imageUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/804.png";

		const response = await fetch(imageUrl);

		const blob = await response.blob();

		const file = new File([blob], "image.png");

		const url = await fileUpload(file);

		expect(typeof url).toBe("string");
	});
});
