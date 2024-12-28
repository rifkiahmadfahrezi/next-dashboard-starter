import React from 'react'
import { BackButton } from '@/components/back-button'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const NotFoundPage = () => {
  return (
   <div className="grid min-h-svh place-items-center">
      <div className="flex flex-col items-center text-center">
         <span className='text-9xl font-bold'>405</span>
         <h1 className='text-3xl mt-4 font-semibold'>Action Not Allowed</h1>
         <p className='max-w-md text-muted-foreground'>The method or action you&lsquo;re trying to perform isn&lsquo;t supported.</p>

         <div className="flex items-center gap-2 mt-6 mx-auto">
            <BackButton />
            <Button
               asChild
               >
               <Link
                  href={'/'}
                  >
                  Back to home
               </Link>
            </Button>
         </div>
      </div>
   </div>
  )
}

export default NotFoundPage