export default {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  setupFiles: ['<rootDir>/src/setup-jest.js'],
};
