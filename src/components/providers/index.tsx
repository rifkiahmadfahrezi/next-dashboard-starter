'use client'

import React from 'react'
import ReactQueryProvider from './react-query-provider'
import { ThemeProvider } from './theme-provider'
import { Toaster } from '../ui/sonner'
import ProgressProvider from './progress-provider'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

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
      <ProgressProvider>
      <NuqsAdapter>
         {children}
      </NuqsAdapter>
      </ProgressProvider>
      <Toaster />
      </ThemeProvider>
      </ReactQueryProvider>
   </>
  )
}

export default Providers