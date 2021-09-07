module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        alias: {
          '>': './',
          '~': './src',
        },
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
}
