module.exports = {
	testEnvironment: "jest-environment-jsdom",
	transformIgnorePatterns: [],
	setupFiles: ["./jest.setup.js"],
	transform: { "\\.[jt]sx?$": "babel-jest" },
};
