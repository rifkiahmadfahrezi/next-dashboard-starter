'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const NotFoundPage = (
{
   error,
   reset,
 }: {
   error: Error & { digest?: string }
   reset: () => void
 }
) => {

   useEffect(() => {
      console.log(error)
   }, [error])

  return (
   <div className="grid min-h-svh place-items-center">
      <div className="flex flex-col items-center text-center">
         <span className='text-9xl font-bold'>500</span>
         <h1 className='text-3xl mt-4 font-semibold'>Oops! Something went wrong.</h1>
         <p className='max-w-sm text-muted-foreground'>It looks like we&lsquo;re having some technical issues on our side. Don&lsquo;t worry; we&lsquo;re already working on it!</p>

         <div className="flex items-center gap-2 mt-6 mx-auto">
            <Button 
               // onClick={reset}
               >
               Retry
            </Button>
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