module.exports = {
  extends: 'standard',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['html'],
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  rules: {
    'no-extend-native': 'off',
    'no-new': 'off',
    'no-eval': 'off',
    'no-alert': 'off',
    'no-spaced-func': 'off',
    'no-var': 'off',
    'no-debugger': 'off',
    'no-useless-constructor': 'off',
    'object-curly-spacing': 'off'
  },
  globals: {
    Vhall: true,
    VhallInteraction: true,
    VhallInteractionGuest: true
  }
}
