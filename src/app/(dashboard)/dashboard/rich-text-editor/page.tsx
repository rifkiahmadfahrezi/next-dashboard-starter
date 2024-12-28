import React from 'react'
import RichTextEditor from './components/rich-text-editor'

import type { Metadata } from 'next'

export const metadata : Metadata = {
   title: 'Rich text editor'
}

const RichEditorPage = () => {
  return (
   <>
   <RichTextEditor />
   </>
  )
}

export default RichEditorPage