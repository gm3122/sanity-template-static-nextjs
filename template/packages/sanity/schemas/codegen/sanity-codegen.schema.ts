import schemaTypes from 'all:part:@sanity/base/schema-type'
import createSchema from 'part:@sanity/base/schema-creator'

import { schemas } from '../schema'
import color from './color'

export default createSchema({
  name: 'mySchema',
  types: schemaTypes.concat([color, ...schemas]),
})
