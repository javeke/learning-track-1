/** @type {import('jest').Config} */

module.exports = {
  verbose: true,
  moduleFileExtensions: ["js", "json", "ts", "vue"],
  transform: {
    "\\.js$": "babel-jest",
    "\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue2-jest"
  },
  testEnvironment: 'jsdom',
  testRegex: ['.*\\.spec\\.js$'],
  testMatch: undefined,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: ["<rootDir>/.rdvue/", "<rootDir>/node_modules/"]
};