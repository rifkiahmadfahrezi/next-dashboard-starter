import React from 'react'
import Footer from '@/components/footer'
import { Navbar } from '@/components/navbar'

const Layout = ({
   children
}: {
   children: React.ReactNode
}) => {
  return (
   <>
   <Navbar />
   <main className="min-h-svh">
      {children}
   </main>
   <Footer />
   </>
  )
}

export default Layout