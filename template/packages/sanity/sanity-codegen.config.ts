import { SanityCodegenConfig } from 'sanity-codegen'

import babelOptions from './.babelrc'

const config: SanityCodegenConfig = {
  schemaPath: 'schemas/schema.ts',
  outputPath: 'schema-types.ts',
  prettierResolveConfigPath: '../../.prettierrc.js',
  babelOptions: {
    presets: babelOptions.presets,
    // ignore: [/node_modules\/(?!sanity-client).*/], // use if run outside sanity package
  },
}

export default config
