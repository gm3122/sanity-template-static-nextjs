import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'

import siteSettings from './settings-site'
import themeSettings from './settings-theme'

export const schemas = [siteSettings, themeSettings]

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat(schemas),
})
