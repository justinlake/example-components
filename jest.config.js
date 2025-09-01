const test = require("node:test");

const config = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the tests
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/config/"
  ],

  // Minimum coverage threashold for passing tests
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // An array of regexp pattern strings used to skip test files
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/",
    "/config/"
  ],

  // A map from regular expressions that allow to stub out resources with a single module
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.(css|less|scss|sass)$': '<rootDir>/config/styleStub.js',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/config/fileStub.js'
  },

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The paths to set up the testing framework before each test
  setupFilesAfterEnv: [
    "<rootDir>/config/setupTests.js"
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
};

module.exports = config;
