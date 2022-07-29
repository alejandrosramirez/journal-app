export default {
	setupFiles: ["./jest.setup.js"],
	testEnvironment: "jest-environment-jsdom",
	transformIgnorePatterns: [],
	transform: {
		"\\.[jt]sx?$": "babel-jest",
	},
};
