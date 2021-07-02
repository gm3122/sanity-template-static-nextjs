import { cloneElement, createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { useHistory } from 'pages/_app'

import { PaperProps } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'

type ContentType = JSX.Element | null

interface DialogContextProps {
  closeDialog: () => void
  open: boolean
  setContent: (content: ContentType) => void
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DialogContext = createContext<DialogContextProps>(undefined!)

type DialogProviderProps = {
  children: React.ReactNode
}

function PaperComponent(props: PaperProps): JSX.Element {
  const { children, className } = props
  return (
    <div className={className} style={{ marginTop: 10 }}>
      {children}
    </div>
  )
}

export default function DialogProvider(props: DialogProviderProps) {
  const [open, setOpen] = useState<boolean>(false)
  const [content, setContent] = useState<ContentType>(null)
  const router = useRouter()
  const history = useHistory()

  const closeDialog = useCallback(() => {
    router.push(history.getPrev(), undefined, { scroll: false })
  }, [history, router])

  const children = useMemo(() => content && cloneElement(content, { closeDialog }), [closeDialog, content])

  return (
    <DialogContext.Provider
      value={{
        closeDialog,
        open,
        setContent,
        setOpen,
      }}
    >
      {props.children}
      <Dialog fullScreen fullWidth PaperComponent={PaperComponent} onEscapeKeyDown={closeDialog} open={open}>
        {children}
      </Dialog>
    </DialogContext.Provider>
  )
}

export const useDialog = (): DialogContextProps => useContext(DialogContext)
