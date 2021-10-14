import sanityClient from '@sanity/client'

export default sanityClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_API_PROJECT_ID,
  // useCdn: process.env.NODE_ENV === 'production',
  useCdn: true,
  apiVersion: '2021-06-04',
})
