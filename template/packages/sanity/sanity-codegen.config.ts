import { SanityCodegenConfig } from 'sanity-codegen'

const config: SanityCodegenConfig = {
  schemaPath: 'schemas/schema.ts',
  outputPath: 'schema-types.ts',
  prettierResolveConfigPath: '../../.prettierrc.js',
  babelOptions: {
    plugins: [
      '@babel/plugin-proposal-class-properties',
      [
        'module-resolver',
        {
          alias: {
            'part:@sanity/base/schema-creator': 'sanity-codegen/schema-creator-shim',
            'all:part:@sanity/base/schema-type': 'sanity-codegen/schema-type-shim',
            'part:@sanity/base/schema-type': 'sanity-codegen/schema-type-shim',
            '^part:.*': 'sanity-codegen/no-op',
            '^config:.*': 'sanity-codegen/no-op',
            '^all:part:.*': 'sanity-codegen/no-op',
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
    // ignore: [/node_modules\/(?!sanity-client).*/], // use if run outside sanity package
  },
}

export default config
