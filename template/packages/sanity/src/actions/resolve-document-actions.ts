import defaultResolve, { PublishAction } from 'part:@sanity/base/document-actions'

export default function resolveDocumentActions(props) {
  const { type } = props

  if (['siteSettings', 'themeSettings'].includes(type)) return [PublishAction]

  return [...defaultResolve(props)]
}
