import { groq, wrapClient } from '@sanity-codegen/client'

import sanityClient from './sanity-client'

const configureClient = wrapClient(sanityClient)

const sanity = configureClient<Sanity.Queries.QueryMap>()

export { groq, sanity }
