import { SanityCodegenConfig } from '@sanity-codegen/cli'

const config: SanityCodegenConfig = {
  groqCodegenInclude: 'query.ts',
  prettierResolveConfigPath: '../../.prettierrc.js',
}

export default config
