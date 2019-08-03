module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  preset: 'ts-jest',
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  setupFiles: ['<rootDir>/.jest/register-context.js']
};