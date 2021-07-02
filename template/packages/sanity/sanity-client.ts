import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: "<#< sanity.projectId >#>",
  dataset: "<#< sanity.dataset >#>",
  apiVersion: '2021-06-04',
  useCdn: true, // `false` if you want to ensure fresh data
})
