'use client'

import React from 'react'
import ReactQueryProvider from './react-query-provider'
import { ThemeProvider } from './theme-provider'
import { Toaster } from '../ui/sonner'

const Providers = ({
   children
}: {
   children: React.ReactNode
}) => {
  return (
   <>
      <ReactQueryProvider>
      <ThemeProvider
         attribute="class"
         defaultTheme="system"
         enableSystem
         disableTransitionOnChange
         >
      {children}
      <Toaster />
      </ThemeProvider>
      </ReactQueryProvider>
   </>
  )
}

export default Providers