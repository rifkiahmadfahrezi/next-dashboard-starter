'use client'
import React, { useState } from 'react'
import { Content } from '@tiptap/react'
import { MinimalTiptapEditor } from '@/components/minimal-tiptap'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import EditorResult from './editor-result'

const RichTextEditor : React.FC = () => {
  const [value, setValue] = useState<Content>(`<h2 class="heading-node">Hello</h2><p class="text-node">I’m <a class="link" href="https://github.com/rifkiahmadfahrezi" target="_blank"><u>Rifki</u></a> from Indonesia</p><p class="text-node">Let’s connect:</p><ul class="list-node"><li><p class="text-node"><a class="link" href="https://github.com/rifkiahmadfahrezi" target="_blank">Github</a></p></li><li><p class="text-node"><a class="link" href="https://www.linkedin.com/in/rifki-ahmad-fahrezi/" target="_blank">Linkedin</a></p></li></ul><img src="https://media.tenor.com/kQA86PqyXZQAAAAi/small-dancing-white-cat-dance-funny.gif" alt="" title="" id="twhb8qj9r" width="120" height="214"><p class="text-node"></p>`)

  return (
    <>
      <Card className='p-4' >
        <div className="my-5">
          <h1 className="text-xl font-bold">Text editor</h1>
          <p>Richt text editor from <Link className='underline font-medium' target='_blank' href={'https://shadcn-minimal-tiptap.vercel.app/'}>Minimal Tiptap</Link></p>
        </div>
        <MinimalTiptapEditor
          value={value}
          onChange={setValue}
          className="w-full"
          editorContentClassName="p-5"
          output="html"
          placeholder="Type here..."
          autofocus={true}
          editable={true}
          editorClassName="focus:outline-none"
        />

        <div className="my-5">
          <EditorResult content={value} />
        </div>
      </Card>
    </>
  )
}

export default RichTextEditor