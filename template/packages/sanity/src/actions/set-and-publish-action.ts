import { useEffect, useState } from 'react'

import { useDocumentOperation } from '@sanity/react-hooks'

export default function SetAndPublishAction(props) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { patch, publish } = useDocumentOperation(props.id, props.type)
  const [isPublishing, setIsPublishing] = useState(false)

  useEffect(() => {
    // if the isPublishing state was set to true and the draft has changed
    // to become `null` the document has been published
    if (isPublishing && !props.draft) {
      setIsPublishing(false)
    }
  }, [props.draft])

  return {
    disabled: publish.disabled,
    label: isPublishing ? 'Publishing…' : 'Publish',
    onHandle: () => {
      setIsPublishing(true)
      patch.execute([{ set: { updateAt: new Date().toISOString() } }])
      publish.execute()
      props.onComplete()
    },
  }
}
