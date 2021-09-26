import { someFunction } from './query'
import client from './sanity-client'

export { client }

export const getSiteSettings = () =>
  new Promise((resolve) => {
    someFunction().then((res) => resolve(res[0]))
  })
