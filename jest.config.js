/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
<<<<<<< HEAD
<<<<<<< HEAD
    '.(css|scss)$': 'identity-obj-proxy',
=======
    '\\.(css|scss)$': 'identity-obj-proxy',
>>>>>>> main
=======
    '\\.(css|scss)$': 'identity-obj-proxy',
>>>>>>> 57227f475b8377d9c9670a23c59d2e60516184d1
  },
};
