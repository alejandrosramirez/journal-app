export const fileUpload = async (file) => {
	if (!file) {
		return null;
	}

	const cloudUrl = "https://api.cloudinary.com/v1_1/any-testing/upload";

	const formData = new FormData();
	formData.append("upload_preset", "journal-uploads");
	formData.append("file", file);

	try {
		const response = await fetch(cloudUrl, {
			method: "POST",
			body: formData,
		});

		if (!response.ok) {
			return null;
		}

		const result = await response.json();

		return result.secure_url;
	} catch (error) {
		return null;
	}
};
