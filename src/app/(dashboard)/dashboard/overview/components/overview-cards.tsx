'use client'

import React from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import Icons from '@/components/icons'

const data = [
   {
      title: 'Product Sold Today',
      content: '34 item(s)',
      icon: 'shopping-basket'
   },
   {
      title: 'Income Today',
      content: '$213.22',
      icon: 'hand-coins'
   },
   {
      title: 'On shipping',
      content: '21 item(s)',
      icon: 'package'
   },
]

export default function OverviewCards() {
  return (
   <div className="flex flex-wrap gap-3">
      {data.map(item => (
         <Card 
            className='flex-grow border-secondary'
            key={item.title}>
            <CardHeader>
               <div className="size-8 grid place-items-center bg-primary/10 rounded-full">
                  <Icons 
                     className='size-5'
                     iconName={item.icon} />
               </div>
               <div className="pt-1">
                  <h1 className='text-muted-foreground'>{item.title}</h1>
                  <p className="text-xl font-semibold">{item.content}</p>
               </div>
            </CardHeader>
         </Card>
      ))}
   </div>
  )
}
