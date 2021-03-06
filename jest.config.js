const { defaults } = require('jest-config');

module.exports = {
  "transform": {
    '.(ts|tsx)': 'ts-jest',
  },
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
  preset: 'ts-jest',
  modulePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/samples/"
  ],
  roots: ["<rootDir>/src"],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  setupFiles: [
    "<rootDir>/src/setupTests.ts",
    '<rootDir>/.jest/register-context.js'
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coverageReporters: [
    "lcov",
    "text-summary",
    "html"
  ],
  verbose: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.stories.tsx",
    "!src/**/*.test.tsx"
  ],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "\\.(css)$": "jest-css-modules",
    "monaco-editor": "<rootDir>/node_modules/react-monaco-editor"
  },
  coverageThreshold: {
    "global": {
      "branches": 85,
      "functions": 95,
      "lines": 95,
      "statements": 95
    }
  },
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      "babelConfig": {
        "presets": ["@babel/preset-env", "@babel/preset-react"]
      }
    }
  }
};