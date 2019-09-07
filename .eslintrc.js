// https://dev.to/dorshinar/linting-your-reacttypescript-project-with-eslint-and-prettier-8hb

module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  plugins: ['react'],
  rules: {
    'no-var': 'error'
  }
};
