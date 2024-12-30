'use client'

import React from 'react'
import Icons from '../icons'
import { 
   Card,
   CardHeader,
   CardTitle,
   CardDescription
} from '../ui/card'


const data = [
   {
      icon: 'chevrons-up',
      title: 'Faster setup',
      content: 'I built this to help you skip repetitive work and get straight to building your app.'
   },
   {
      icon: 'glasses',
      title: 'ShadCN Powered',
      content: 'Leverage the power of ShadCN UI for modern, responsive and customizable components.'
   },
   {
      icon: 'code',
      title: 'Built for Developers, by Developers',
      content: 'Crafted with ShadCN UI and another open source projects.'
   },
]

export default function WhySection() {
  return (
   <>
      <section
         id='features'
         className="grid grid-cols-1 md:grid-cols-3 max-w-screen-xl mx-auto gap-3">
         {data.map(item => (
            <Card 
               className='flex-grow'
               key={item.title}>
               <CardHeader>
                  <div className="size-10 mb-3 rounded-full grid place-items-center bg-primary/10">
                     <Icons 
                        iconName={item.icon}/>
                  </div>
                  <CardTitle
                     className='~text-xl/2xl'
                     >{item.title}</CardTitle>
                  <CardDescription>{item.content}</CardDescription>
               </CardHeader>
            </Card>
         ))}
      </section>
   </>
  )
}
