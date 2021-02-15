module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'import',
  ],
  rules: {
    'no-console': 'off',
  },
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
    ],
  },
};
