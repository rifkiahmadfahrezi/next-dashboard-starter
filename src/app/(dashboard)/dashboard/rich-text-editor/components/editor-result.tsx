'use client'

import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Content } from '@tiptap/react'
import { Card } from '@/components/ui/card'

type Props = {
   content: Content
}

const EditorResult : React.FC<Props> = ({
   content
}: Props) => {
  return (
   <>
      <Tabs defaultValue="raw" className="w-full min-h-28 h-full">
         <TabsList>
            <TabsTrigger value="raw">Raw</TabsTrigger>
            <TabsTrigger value="result">Result</TabsTrigger>
         </TabsList>
         {content &&
            <>
            <TabsContent value="raw">
               <Card className='p-3' >
                  <pre className='whitespace-pre-line' >
                     {content.toString()}
                  </pre>
               </Card>
            </TabsContent>
            <TabsContent value="result">
               <Card className='p-3' >
                  <article className='prose dark:prose-invert' dangerouslySetInnerHTML={{__html: content}}/>
               </Card>
            </TabsContent>
            </>
         }
      </Tabs>
   </>
  )
}

export default EditorResult