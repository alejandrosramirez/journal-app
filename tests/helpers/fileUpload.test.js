import { fileUpload } from "../../src/helpers";

describe("Pruebas en fileUpload", () => {
	test("Debe subir el archivo correctamente a cloudinary", async () => {
		const imageUrl = "https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

		const response = await fetch(imageUrl);

		const blob = await response.blob();

		const file = new File([blob], "foto.jpg");

		const url = await fileUpload(file);

		expect(typeof url).toBe("string");
	});
});
