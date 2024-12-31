'use client'

import React from 'react'
import { Button } from '../ui/button'
import MagneticButton from '../ui/magnetic-button'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

export default function Hero() {
  return (
    <header className='grid place-items-center h-svh max-h-[500px]'>
      <div className="flex flex-col justify-center items-center text-center">
         <h1 
            className='~text-2xl/5xl font-bold capitalize'
            >Responsive Shadcn dashboard starter</h1>
         <p className='text-muted-foreground ~text-sm/lg'>Build your web application faster, built using Next 15 and Shadcn UI</p>

         <div className="flex gap-2 items-center mt-7">
            <MagneticButton>
               <Link
                  target='_blank'
                  href={'https://github.com/rifkiahmadfahrezi/next-dashboard-starter'}
                  >
                  Clone template
               </Link>
            </MagneticButton>
            <Button
               asChild
               variant={'outline'}
               >
               <Link
                  className='group'
                  href={'/dashboard'}
                  >
                  Demo <MoveRight className='group-hover:translate-x-1 transition duration-150 ease-linear' />
               </Link>
            </Button>
         </div>
      </div>
    </header>
  )
}
