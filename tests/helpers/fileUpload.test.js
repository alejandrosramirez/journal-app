import { v2 as cloudinary } from "cloudinary";

import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
	cloud_name: "anytesting",
	api_key: "939974865651197",
	api_secret: "jRg-APisUQIFlRfeE-HE8-AuBkc",
	secure: true,
});

describe("Pruebas en fileUpload", () => {
	test("Debe subir el archivo correctamente a cloudinary", async () => {
		const imageUrl = "https://images.wikidexcdn.net/mwuploads/wikidex/8/86/latest/20171215020859/Naganadel.png";

		const response = await fetch(imageUrl);
		const blob = await response.blob();
		const file = new File([blob], "image.png");
		const url = await fileUpload(file);
		expect(typeof url).toBe("string");

		const segments = url.split("/");
		const imageId = segments[segments.length - 1].replace(".png", "");
		await cloudinary.api.delete_resources([`journal/${imageId}`], {
			resource_type: "image",
		});
	});

	test("Debe de retornar null", async () => {
		const file = new File([], "image.png");
		const url = await fileUpload(file);
		expect(url).toBe(null);
	});
});
