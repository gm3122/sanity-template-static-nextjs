const path = require('path')

module.exports = {
  extends: ['../../.eslintrc.js', 'next'],
  rules: {
    '@next/next/no-html-link-for-pages': ['error', path.join(__dirname, 'pages')],
    // develop
    'react/no-unescaped-entities': 'off',
  },
}
