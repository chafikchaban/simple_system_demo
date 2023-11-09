import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  setupFiles: ['<rootDir>/.jest/setup.ts'],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
  },
  testEnvironment: "jsdom"
};

export default config;