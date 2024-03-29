module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  parser: "babel-eslint",
  plugins: [
    'react',
  ],
  rules: {
    "react/prefer-stateless-function": 0,
    "react/jsx-filename-extension": [
        1,
        { 
            "extensions": [".js", ".jsx"] 
        }
    ],
    "import/no-unresolved": false
}
}
