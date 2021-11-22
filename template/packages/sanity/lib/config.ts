import { ProjectConfig } from 'next-sanity'

import { ClientConfig } from '@sanity/client'

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_API_DATASET
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_API_PROJECT_ID

if (!projectId) throw Error('The Project ID is not set. Check your environment variables.')
if (!dataset) throw Error('The dataset name is not set. Check your environment variables.')

const config: ClientConfig & ProjectConfig = {
  dataset,
  projectId,
  // useCdn: process.env.NODE_ENV === 'production',
  useCdn: true,
  apiVersion: '2021-06-04',
}

export default config
