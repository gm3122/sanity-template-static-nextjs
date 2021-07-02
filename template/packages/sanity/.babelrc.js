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
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
}
