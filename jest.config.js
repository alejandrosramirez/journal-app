export default async () => {
	return {
		verbose: true,
		testEnvironment: "jest-environment-jsdom",
		setupFiles: ["./jest.setup.js"],
	};
};
