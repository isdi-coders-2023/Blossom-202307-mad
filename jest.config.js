/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
<<<<<<< HEAD
    '.(css|scss)$': 'identity-obj-proxy',
=======
    '\\.(css|scss)$': 'identity-obj-proxy',
>>>>>>> main
  },
};
