'use client'

import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressProvider = ({
   children
}: {
   children: React.ReactNode
}) => {
  return (
   <>
   {children}
   <ProgressBar
      height="4px"
      color="#0fbcf9"
      options={{ showSpinner: false }}
      shallowRouting
      />
   </>
  )
}

export default ProgressProvider  