import React from 'react'
import ContacForm from './components/contact-form'
import { 
   Card,
   CardHeader,
   CardContent
} from '@/components/ui/card'

import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Contact'
}

const ContactPage = () => {
  return (
   <>
   <section id="contact" 
      className="max-w-xl mx-auto px-3 my-10">
      <Card>
         <CardHeader>
            <h1 className='~text-2xl/3xl font-bold' >Request a quote</h1>
         </CardHeader>
         <CardContent>
            <ContacForm />
         </CardContent>
      </Card>
   </section>
   </>
  )
}

export default ContactPage